// 문제 정의:
// 주어진 문자열에서 가장 긴 반복되는 부분 문자열을 찾으시오. 반복되는 부분 문자열이 없다면 빈 문자열을 반환하시오.

// 예시:

// 입력: "mississippi"
// 출력: "issi"

// 입력: "abcdefgabcdefg"
// 출력: "abcdefg"

// 입력: "xyzxyzxyz"
// 출력: "xyzxyz"

// 입력: "abcde"
// 출력: ""

function longestRepeatingSubstring(s) {
  // (s - 1)자리부터 한 자리 문자까지 s를 순회하며 비교한다.
  // 비교하는 경우 비교군이 될 문자열은 가장 긴 문자열부터 내림차순으로 비교군이 만들어져야한다.
  // 비교군이 될 문자열이 들어갈 빈 배열 arr을 선언해두고 1번째 for문으로 비교군이 될 문자열을 만든다.
  // arr에 요소를 다 받았으면 요소의 개수만큼 2번째 for문 안에서 마찬가지로 s를 잘라 arr의 요소와 일치할 때 마다 count를 증가시킨다
  // count가 1보다 크다면 반복이 1회는 있었다는 뜻이므로 반복된 arr의 요소를 return
  // 모든 for문을 순회했다면 빈 문자열을 return

  for (let i = 2; i <= s.length; i++) {
    let arr = [];
    for (let j = 0; j < i; j++) {
      arr.push(s.slice(j, s.length - i + 1 + j));
    }
    for (let k = 0; k < arr.length; k++) {
      let count = 0;
      for (let l = 0; l < i; l++) {
        const slicedS = s.slice(l, s.length - i + 1 + l);
        if (slicedS === arr[k]) {
          count++;
          if (count > 1) {
            return arr[k];
          }
          continue;
        }
      }
    }
  }
  return "";
}

// 테스트 코드
function testLongestRepeatingSubstring() {
  const testCases = [
    { input: "banana", expected: "ana" },
    { input: "abcdef", expected: "" },
    { input: "abcabc", expected: "abc" },
    { input: "aaaa", expected: "aaa" },
    { input: "abababab", expected: "ababab" },
    { input: "mississippi", expected: "issi" },
    { input: "abcdefgabcdefg", expected: "abcdefg" },
    { input: "xyzxyzxyz", expected: "xyzxyz" },
    { input: "abcde", expected: "" },
    { input: "abracadabra", expected: "abra" },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = longestRepeatingSubstring(input);
      if (result !== expected)
        throw new Error(`Expected ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출
testLongestRepeatingSubstring();
