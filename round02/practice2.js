// 문제 정의:
// 주어진 문자열에서 각 단어를 반전시키시오. 단어의 순서는 그대로 유지되어야 합니다.

// 예시:

// 입력: "the sky is blue"
// 출력: "eht yks si eulb"

// 입력: "hello world"
// 출력: "olleh dlrow"

function reverseEachWord(s) {
  // s를 공백을 기준으로 나누고 각 요소를 철자별로 배열에 spread한다.
  // updatedRvsArr에는 단어별로 뒤집힌 문자열이 요소로 들어가도록, rvsArr에는 단어의 철자가 역순으로 들어올 수 있도록 빈 배열을 만든다.
  // 반복문을 이용해서 updatedRvsArr에 rvsArr을 결합한 문자열이 모두 들어온 후에 updatedRvsArr를 공백을 기준으로 문자열로 결합한다.

  const strArr = s.split(" ").map((str) => [...str]);
  const updatedRvsArr = [];

  for (let i = 0; i < strArr.length; i++) {
    const rvsArr = [];
    for (let j = strArr[i].length - 1; j >= 0; j--) {
      rvsArr.push(strArr[i][j]);
    }
    updatedRvsArr.push(rvsArr.join(""));
  }

  return updatedRvsArr.join(" ");
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
