export enum LocaleEnum {
	UZ = "uz",
	RU = "ru",
	EN = "en",
	TR = "tr",
}

export const localeList = ["ru", "en", "uz"] as const;

export type LocaleCode = (typeof localeList)[number];

export type LocalizedString = Record<LocaleCode, string>;
