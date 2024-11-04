import { screen } from '@testing-library/react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

/// AAA (Arrange, Act, Assert)
it('className prop으로 설정한 css class가 적용된다', async () => {
  // renderApi 호출
  await render(<TextField className={'my-class'} />);

  // className 이라는 내부 props, state 값을 검증 (X)
  // 렌더링되는 DOM 구조가 올바르게 변경되었는지 확인 (O) -> 최종적으로 사용자가 보는 결과는 DOM
  expect(screen.getByPlaceholderText('텍스트를 입력해 주세요.')).toHaveClass(
    'my-class',
  );
});
