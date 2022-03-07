import { render, screen } from "@testing-library/react";
import Write from "./Write";

test('on initial render, the publish button is enabled', () => {
  render(<Write/>)

  expect(screen.getByRole(('button'), {name: /publish/i} )).toBeEnabled();
});

// Use this for testing async. Need to use finByRole instead of getByRole
// test('on initial render, the publish button is enabled', async() => {
//   render(<Write/>)

//   expect(await screen.findByRole(('button'), {name: /publish/i} )).toBeEnabled();
// });

