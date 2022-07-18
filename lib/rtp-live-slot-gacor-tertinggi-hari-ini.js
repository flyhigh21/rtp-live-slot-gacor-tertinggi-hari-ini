'use babel';

import RtpLiveSlotGacorTertinggiHariIniView from './rtp-live-slot-gacor-tertinggi-hari-ini-view';
import { CompositeDisposable } from 'atom';

export default {

  rtpLiveSlotGacorTertinggiHariIniView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.rtpLiveSlotGacorTertinggiHariIniView = new RtpLiveSlotGacorTertinggiHariIniView(state.rtpLiveSlotGacorTertinggiHariIniViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.rtpLiveSlotGacorTertinggiHariIniView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'rtp-live-slot-gacor-tertinggi-hari-ini:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.rtpLiveSlotGacorTertinggiHariIniView.destroy();
  },

  serialize() {
    return {
      rtpLiveSlotGacorTertinggiHariIniViewState: this.rtpLiveSlotGacorTertinggiHariIniView.serialize()
    };
  },

  toggle() {
    console.log('RtpLiveSlotGacorTertinggiHariIni was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
