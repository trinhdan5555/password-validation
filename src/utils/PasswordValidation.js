import { passwordValidationResult } from "./Constants";

const isMatched = (text1, text2) => text1 && text1 === text2;
const hasPasswordMinimumLength = (text) => text && text.length >= 6
const hasAtLeastOneUppercaseCharacter = (text) => text && /(?=.*[A-Z])/.test(text)
const hasAtLeastOneLowercaseCharacter = (text) => text && /(?=.*[a-z])/.test(text)
const hasAtLeastOneNumber = (text) => text && /(?=.*[0-9])/.test(text)
const hasAtLeastOneSpecialCharacter = (text) => text && /(?=.*\W)/.test(text)

export const validatePasswordTexts = (text1, text2) => {
  if (!isMatched(text1, text2)) return passwordValidationResult["1001"]
	else if (!hasPasswordMinimumLength(text1)) return passwordValidationResult["1002"]
	else if (!hasAtLeastOneUppercaseCharacter(text1)) return passwordValidationResult["1003"]
	else if (!hasAtLeastOneLowercaseCharacter(text1)) return passwordValidationResult["1004"]
	else if (!hasAtLeastOneNumber(text1)) return passwordValidationResult["1005"]
	else if (!hasAtLeastOneSpecialCharacter(text1)) return passwordValidationResult["1006"]
	return passwordValidationResult["1007"]
}
