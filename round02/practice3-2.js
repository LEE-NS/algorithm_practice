// 문제 정의:
// 주어진 문자열이 팰린드롬인지 확인하라. 팰린드롬이란 앞에서부터 읽었을 때와 뒤에서부터 읽었을 때가 같은 문자열을 의미한다. 가능하다면 true, 아니라면 false를 반환하라.
// 단, reverse 함수를 사용하면 안된다.

// 조건:
// 대소문자를 구분하지 않는다.
// 공백과 특수 문자는 무시한다.

// 예시:
// 입력: "A man, a plan, a canal, Panama"
// 출력: true
// 입력: "hello"
// 출력: false

function isPalindrome(s) {
  // s의 특수문자를 모두 제거한다.
  // s의 공백을 모두 제거, 소문자로 통일시킨 후 한 문자씩 요소로 들어간 배열 charArr로 변환
  // 빈 배열로 선언한 palinArr에 charArr을 index대로 앞에서부터 삽입
  // palinArr과 charArr를 문자열로 변환한 것이 같으면 true 아니면 false 반환
  const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
  const charArr = [...s.replace(reg, "").split(" ").join("").toLowerCase()];
  const palindArr = [];
  for (let i = 0; i < charArr.length; i++) {
    palindArr.unshift(charArr[i]);
  }
  if (palindArr.join("") === charArr.join("")) {
    return true;
  }
  return false;
}

// 테스트 코드
function testIsPalindrome() {
  const testCases = [
    { input: "A man, a plan, a canal, Panama", expected: true },
    { input: "hello", expected: false },
    { input: "racecar", expected: true },
    { input: "No 'x' in Nixon", expected: true },
    { input: "Was it a car or a cat I saw?", expected: true },
    { input: "Not a palindrome", expected: false },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = isPalindrome(input);
      if (result !== expected)
        throw new Error(`Expected ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출
testIsPalindrome();
