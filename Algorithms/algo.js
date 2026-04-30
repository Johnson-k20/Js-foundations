/* sample algorithm that reads a sentence, which end with a point ,character by
 character to determine:
the length of sentence
number of words in a sentence assuming that words are separated by a sinle space 
number of vowels 
each character is treated separately 


counters
 charCount-total number of characters
wordCount-total number of words 
vowel -count -total number of vowels

The algorithm reads the sentence character by character until hitting the fullstop
Every character increments (charCount)
If vowel increment vowelcount
if character is a space, increment wordCount

pseudo code example;
Initialize charCount = 0
Initialize wordCount = 0
Initialize vowelCount = 0

Read character ch

WHILE ch != '.'
    charCount = charCount + 1

    IF ch is 'a' OR 'e' OR 'i' OR 'o' OR 'u'
       OR 'A' OR 'E' OR 'I' OR 'O' OR 'U'
        vowelCount = vowelCount + 1
    ENDIF

    IF ch == ' '
        wordCount = wordCount + 1
    ENDIF

    Read next character ch
ENDWHILE

charCount = charCount + 1   // for '.'
wordCount = wordCount + 1  // last word

Print charCount, wordCount, vowelCount
