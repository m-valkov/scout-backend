describe('Error testing', () => {
  test('404 error', async () => {
    const { Api404Error } = await import('../internal/exceptions/Api404');
    const t = () => {
      throw new Api404Error('Not found');
    };
    expect(t).toThrow(Api404Error);
    expect(t).toThrow('Not found');
  });
});
