<?php


namespace FoF\DiscussionAgreeMessage\Listeners;


use Flarum\Discussion\Event\Saving;
use FoF\DiscussionAgreeMessage\Validators\AgreementDiscussionValidator;
use Illuminate\Support\Arr;

class ValidateAgreementCheck
{
    /**
     * @var AgreementDiscussionValidator
     */
    protected $validator;

    public function __construct(AgreementDiscussionValidator $validator)
    {
        $this->validator = $validator;
    }

    public function handle(Saving $event) {
        if ($event->discussion->exists) {
            return;
        }

        $this->validator->assertValid([
            'agreementCheck' => Arr::get($event->data, 'attributes.agreement-check'),
        ]);
    }
}