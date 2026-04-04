export const fillNumberQuestions = [
  {
    prompt: 'Vạch A, B, C trên thước chỉ số đo nào', // đề bài
    pictureUrl: 'https://www.borrowmydoggy.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4ij0poqn%2Fproduction%2Fe24bfbd855cda99e303975f2bd2a1bf43079b320-800x600.jpg&w=1080&q=80', // link ảnh đề bài
    unit: 'dm', // đơn vị
    questions: [
      { label: 'Vạch A chỉ số đo:', ans: 10 }, // label: câu hỏi, ans: đáp án
      { label: 'Vạch B chỉ số đo:', ans: 11 },
      { label: 'Vạch C chỉ số đo:', ans: 12 },
    ]
  }
]

export const compareQuestions = [
  // op1: toán tử 1, op2: toán tử 2
  { op1: 2, op2: 3 },
  { op1: 3, op2: 3 },
  { op1: 5, op2: 4 },
  { op1: 1, op2: 2 },
  { op1: 7, op2: 3 },
  { op1: 2, op2: 6 },
  { op1: 5, op2: 5 },
  { op1: 4, op2: 4 },
]