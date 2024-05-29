// 문제 정의:
// 주어진 문자열에서 각 단어를 반전시키시오. 단어의 순서는 그대로 유지되어야 합니다.

// 예시:

// 입력: "the sky is blue"
// 출력: "eht yks si eulb"

// 입력: "hello world"
// 출력: "olleh dlrow"

function reverseEachWord(s) {
  // s를 공백을 기준으로 나눈다.
  // 나눠진 요소가 들어간 배열에 대해 각 요소를 다시 배열로 나누어 reverse하고 join
  // reverse된 요소를 공백을 기준으로 join한다

  const arr = s.split(" ");
  const reversedStrArr = arr.map((str) => str.split("").reverse().join(""));
  return reversedStrArr.join(" ");
}

function testReverseEachWord() {
  const testCases = [
    { input: "the sky is blue", expected: "eht yks si eulb" },
    { input: "hello world", expected: "olleh dlrow" },
    { input: "a b c d", expected: "a b c d" },
    { input: "Palindrome", expected: "emordnilaP" },
    { input: "I love coding", expected: "I evol gnidoc" },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = reverseEachWord(input);
      if (result !== expected)
        throw new Error(`Expected ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출
testReverseEachWord();
