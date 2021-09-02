import app from 'flarum/forum/app';
import Component, { ComponentAttrs } from 'flarum/common/Component';
import Checkbox from 'flarum/common/components/Checkbox';
import Stream from 'flarum/common/utils/Stream';
import 'autolink-js';

import type Mithril from 'mithril';

const PREFIX = `datitisev-discussion-agree-message`;

export interface AgreementCheckAttrs extends ComponentAttrs {
  set: (value: boolean) => unknown;
}

export default class AgreementCheck<T extends AgreementCheckAttrs = AgreementCheckAttrs> extends Component<T> {
  checked = Stream(false);

  title?: string = app.data[`${PREFIX}.title`];
  description?: string = app.data[`${PREFIX}.description`];
  agreement?: string = app.data[`${PREFIX}.agreement`];

  oninit(vnode: Mithril.Vnode<T, this>) {
    super.oninit(vnode);

    this.description = $('<div />').text(this.description!).html().autoLink();
  }

  view() {
    return (
      <div className="AgreementCheck">
        <div className="Alert">
          <div className="Alert-body">
            <div className="hide">
              {this.title && <h4>{this.title}</h4>}
              {this.description && <p>{m.trust(this.description)}</p>}
            </div>

            <Checkbox state={this.checked()} onchange={this.onchange.bind(this)}>
              {this.agreement}
            </Checkbox>
          </div>
        </div>
      </div>
    );
  }

  onchange() {
    const newStatus = !this.checked();
    const interval = setInterval(() => m.redraw());

    if (newStatus) {
      this.$('.hide').slideUp(250, () => clearInterval(interval));
    } else {
      this.$('.hide').slideDown(250, () => clearInterval(interval));
    }

    this.attrs.set(newStatus);

    this.checked(newStatus);
  }
}
