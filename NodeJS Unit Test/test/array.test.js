test('arrays', () => {
  const names = ['Fahmi', 'Nugroho', 'Eko'];
  expect(names).toContain('Fahmi');
  expect(names).toEqual(['Fahmi', 'Nugroho', 'Eko']);

  const person = [{name: 'Fahmi'}, {name: 'Nugroho'}, {name: 'Eko'}];
  expect(person).toContainEqual({name: 'Fahmi'});
  expect(person).toEqual([{name: 'Fahmi'}, {name: 'Nugroho'}, {name: 'Eko'}]);
})