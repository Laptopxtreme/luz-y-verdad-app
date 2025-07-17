
export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

export interface BibleVerse {
  reference: string;
  text: string;
  translation_id: string;
  translation_name: string;
}

export enum AppView {
  Chat = 'Chat',
  VerseFinder = 'VerseFinder',
  Prayer = 'Prayer'
}
