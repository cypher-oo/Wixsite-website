Python 3.8.0 (tags/v3.8.0:fa919fd, Oct 14 2019, 19:21:23) [MSC v.1916 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> word = "supercalifragilisticexpialidocious"
>>> word[0]
's'
>>> word
'supercalifragilisticexpialidocious'
>>> word[2]
'p'
>>> word[0:5:1]
'super'
>>> word[0:5:2]
'spr'
>>> word[5:9:1]
'cali'
>>>  word[5:]
 
SyntaxError: unexpected indent
>>> word[5:]
'califragilisticexpialidocious'
>>> word[5::3]
'cialteiicu'
>>> word[:7]
'superca'
>>> word[:3]
'sup'
>>> word[::-2]
'socdlixctiiaflceu'
>>> word.index("cali")
5
>>> word[word.index("cali"):word.index("fragi")]
'cali'
>>> 
