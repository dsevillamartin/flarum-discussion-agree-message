<?php


namespace FoF\DiscussionAgreeMessage\Validators;

use Flarum\Foundation\AbstractValidator;

class AgreementDiscussionValidator extends AbstractValidator
{
    protected $rules = [
        'agreementCheck' => 'accepted',
    ];
}