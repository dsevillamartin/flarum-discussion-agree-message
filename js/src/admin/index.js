import app from 'flarum/admin/app';

const PREFIX = `datitisev-discussion-agree-message`;

app.initializers.add('datitisev/flarum-discussion-agree-message', () => {
  /*
   * Code adapted from fof/prevent-necrobumping, released under MIT
   * https://github.com/FriendsOfFlarum/prevent-necrobumping/blob/5abefcde5da8c573044e73184464ae887dca1417/js/src/admin/components/SettingsPage.js
   */
  app.extensionData
    .for('datitisev-discussion-agree-message')
    .registerSetting({
      label: app.translator.trans(`${PREFIX}.admin.settings.title_label`),
      setting: `${PREFIX}.title`,
      type: 'text',
    })
    .registerSetting({
      label: app.translator.trans(`${PREFIX}.admin.settings.description_label`),
      setting: `${PREFIX}.description`,
      type: 'text',
    })
    .registerSetting({
      label: app.translator.trans(`${PREFIX}.admin.settings.agreement_label`),
      setting: `${PREFIX}.agreement`,
      type: 'text',
    })
    .registerSetting({
      label: app.translator.trans(`${PREFIX}.admin.settings.disable_inputs_label`),
      setting: `${PREFIX}.disable-inputs`,
      type: 'boolean',
    });
});
