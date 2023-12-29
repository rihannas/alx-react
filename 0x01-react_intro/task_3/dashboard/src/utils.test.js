import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe('getFullYear function', () => {
  it('returns the current year', () => {
    const result = getFullYear();
    const date = new Date()
    const currentYear = date.getFullYear()
    expect(result).toBe(currentYear);
    });
});

describe('getFooterCopy function', () => {
  it('if true returns Holberton School', () => {
    const result = getFooterCopy(true);
    expect(result).toBe('Holberton School')
    });

  it('if true returns Holberton School main dashboad', () => {
    const result = getFooterCopy(false);
    expect(result).toBe('Holberton School main dashboard')
    });


});

describe('getLatestNotification function', () => {
    it('returns a string', () => {
        const notfication = getLatestNotification()
        const result = typeof(notfication)
        expect(result).toBe("string")
    })
})