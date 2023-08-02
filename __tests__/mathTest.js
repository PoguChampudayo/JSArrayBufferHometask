import Character from "../src/math";
import Daemon from "../src/Daemon";
import Magician from "../src/Magician";
import { experiments } from "webpack";

const fixture = [
    [2, false, 90],
    [3, false, 80],
    [4, false, 70],
    [2, true, 85],
    [3, true, 80 - Math.log2(3) * 5],
    [4, true, 60],
  ];

  test.each(fixture)(
    ('should get attack with %i distance (stoned or not)'),
    (distance, stoned, expected) => {
      let daemon = new Daemon('George')
      daemon.getStoned(stoned)
      expect(daemon.getAttack(distance)).toBe(expected);
      

      let magician = new Magician('George')
      magician.getStoned(stoned)
      expect(magician.getAttack(distance)).toBe(expected);
      
    },
  );

  test('checks default stone status', () => {
    let daemon = new Daemon('George')
    let magician = new Magician('George')
    magician.getStoned()
    expect(magician.stoned).toBe(true);
    daemon.getStoned()
    expect(daemon.stoned).toBe(true);
  });