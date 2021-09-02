<?php

/*
 * This file is part of datitisev/flarum-discussion-agree-message.
 *
 * Copyright (c) 2021 David Sevilla Martin.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace FoF\DiscussionAgreeMessage;

use Flarum\Discussion;
use Flarum\Extend;
use FoF\Extend\Extend\ExtensionSettings;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),
    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new ExtensionSettings())
        ->setPrefix('datitisev-discussion-agree-message.')
        ->addKeys(['title', 'description', 'agreement']),

    (new Extend\Event())
        ->listen(Discussion\Event\Saving::class, Listeners\ValidateAgreementCheck::class),
];
