import { SearchParams } from '../../searchable-repository-contracts'

describe('Searchable Repository unit tests', () => {
  describe('SearchParams tests ', () => {
    it('page prop', () => {
      const sut = new SearchParams()
      expect(sut.page).toBe(1)

      const params = [
        { page: null, expected: 1 },
        { page: undefined, expected: 1 },
        { page: '', expected: 1 },
        { page: 'teste', expected: 1 },
        { page: 0, expected: 1 },
        { page: -23, expected: 1 },
        { page: 5.5, expected: 1 },
        { page: true, expected: 1 },
        { page: false, expected: 1 },
        { page: {}, expected: 1 },
        { page: 1, expected: 1 },
        { page: 2, expected: 2 },
      ]

      params.forEach(i => {
        expect(new SearchParams({ page: i.page as any }).page).toBe(i.expected)
      })
    })
    it('perPage prop', () => {
      const sut = new SearchParams()
      expect(sut.perPage).toBe(15)

      const params = [
        { perPage: null, expected: 15 },
        { perPage: undefined, expected: 15 },
        { perPage: '', expected: 15 },
        { perPage: 'teste', expected: 15 },
        { perPage: 0, expected: 15 },
        { perPage: -23, expected: 15 },
        { perPage: 5.5, expected: 15 },
        { perPage: true, expected: 15 },
        { perPage: false, expected: 15 },
        { perPage: {}, expected: 15 },
        { perPage: 1, expected: 1 },
        { perPage: 2, expected: 2 },
        { perPage: 25, expected: 25 },
      ]

      params.forEach(i => {
        expect(new SearchParams({ perPage: i.perPage as any }).perPage).toBe(
          i.expected,
        )
      })
    })
    it('sort prop', () => {
      const sut = new SearchParams()
      expect(sut.sort).toBeNull()

      const params = [
        { sort: null, expected: null },
        { sort: undefined, expected: null },
        { sort: '', expected: null },
        { sort: 'teste', expected: 'teste' },
        { sort: 0, expected: '0' },
        { sort: -23, expected: '-23' },
        { sort: 5.5, expected: '5.5' },
        { sort: true, expected: 'true' },
        { sort: false, expected: 'false' },
        { sort: {}, expected: '[object Object]' },
        { sort: 1, expected: '1' },
        { sort: 2, expected: '2' },
        { sort: 25, expected: '25' },
      ]

      params.forEach(i => {
        expect(new SearchParams({ sort: i.sort as any }).sort).toBe(i.expected)
      })
    })
    it('sortDir prop', () => {
      let sut = new SearchParams()
      expect(sut.sortDir).toBeNull()

      sut = new SearchParams({ sort: null })
      expect(sut.sortDir).toBeNull()

      sut = new SearchParams({ sort: undefined })
      expect(sut.sortDir).toBeNull()

      sut = new SearchParams({ sort: '' })
      expect(sut.sortDir).toBeNull()

      const params = [
        { sortDir: null, expected: 'desc' },
        { sortDir: undefined, expected: 'desc' },
        { sortDir: '', expected: 'desc' },
        { sortDir: 'teste', expected: 'desc' },
        { sortDir: 0, expected: 'desc' },
        { sortDir: -23, expected: 'desc' },
        { sortDir: 5.5, expected: 'desc' },
        { sortDir: true, expected: 'desc' },
        { sortDir: false, expected: 'desc' },
        { sortDir: {}, expected: 'desc' },
        { sortDir: 1, expected: 'desc' },
        { sortDir: 2, expected: 'desc' },
        { sortDir: 25, expected: 'desc' },
        { sortDir: 'desc', expected: 'desc' },
        { sortDir: 'asc', expected: 'asc' },
        { sortDir: 'ASC', expected: 'asc' },
        { sortDir: 'DESC', expected: 'desc' },
      ]

      params.forEach(i => {
        expect(
          new SearchParams({ sort: 'field', sortDir: i.sortDir as any })
            .sortDir,
        ).toBe(i.expected)
      })
    })

    it('filter prop', () => {
      const sut = new SearchParams()
      expect(sut.filter).toBeNull()

      const params = [
        { filter: null, expected: null },
        { filter: undefined, expected: null },
        { filter: '', expected: null },
        { filter: 'teste', expected: 'teste' },
        { filter: 0, expected: '0' },
        { filter: -23, expected: '-23' },
        { filter: 5.5, expected: '5.5' },
        { filter: true, expected: 'true' },
        { filter: false, expected: 'false' },
        { filter: {}, expected: '[object Object]' },
        { filter: 1, expected: '1' },
        { filter: 2, expected: '2' },
        { filter: 25, expected: '25' },
      ]

      params.forEach(i => {
        expect(new SearchParams({ filter: i.filter as any }).filter).toBe(
          i.expected,
        )
      })
    })
  })
})
