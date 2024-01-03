export function test() {
  return null;
}

export const hasNotch = () => {
  /**
   * For storybook test
   */
  const storybook = window.location !== window.parent.location;
  // @ts-ignore
  const iPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream;
  const aspect = window.screen.width / window.screen.height;
  const aspectFrame = window.innerWidth / window.innerHeight;
  return (
    (iPhone && aspect.toFixed(3) === '0.462') || (storybook && aspectFrame.toFixed(3) === '0.462')
  );
};

export const fetcher = async (...args: Parameters<typeof fetch>) => {
  const response = await fetch(...args);
  return response.json();
};