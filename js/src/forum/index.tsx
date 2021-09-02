import app from 'flarum/forum/app';
import { extend, override } from 'flarum/common/extend';
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';
import AgreementCheck from './components/AgreementCheck';

import type ItemList from 'flarum/common/utils/ItemList';

app.initializers.add('datitisev/flarum-discussion-agree-message', () => {
  override(DiscussionComposer.prototype, 'view', function (this: DiscussionComposer, orig, vnode) {
    this.attrs.disabled ||= !this.composer.fields.agreementCheck;

    return orig(vnode);
  });

  extend(DiscussionComposer.prototype, 'headerItems', function (this: DiscussionComposer, items: ItemList) {
    items.add('agreement-check', <AgreementCheck set={(v: boolean) => (this.composer.fields.agreementCheck = v)} />);
  });

  extend(DiscussionComposer.prototype, 'data', function (this: DiscussionComposer, data: any) {
    data['agreement-check'] = this.composer.fields.agreementCheck;
  });
});
