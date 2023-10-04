export class Util {

  /**
   *
   * @param {number} from
   * @param {number} to
   * @returns {number}
   */
  random(from, to) {
    return Math.floor(Math.random() * to) + 1;
  }
}
