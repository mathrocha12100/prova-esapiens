import ptBr from './ptBr';

export type LanguageProps = typeof ptBr;

export const languagesTypes = ['ptBr', 'enUs'] as const;

export type LanguagesAvailableTypes = typeof languagesTypes[number];

