const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
`

//const regexp = new RegExp('the','gi')
// const regexp = /the/gi
// const regexp = /fox/gi
// console.log(str.replace(regexp, 'AAA' ))
// console.log(str)


// console.log(str.match(/\.$/gim))

// console.log(
//   str.match(/d$/gm)
// )

// console.log(
//   str.match(/https?/g)
// )

// console.log(
//   str.match(/d{2}/)
// )

// \w 는 숫자를 포함한 영어 알파벳들을 의미
// console.log(
//   str.match(/\b\w{2,3}\b/g)
// )

//f로 시작하는 단어를 찾는 방법
console.log(
  str.match(/\bf\w{1,}\b/g)
)

//@ 앞에 내용을 가져오는 방법
console.log(
  str.match(/.{1,}(?=@)/g)
)ㅡ

//@ 뒤에 내용을 가져오는 방법
console.log(
  str.match(/(?<=).{1,}/g)
)