function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return (input => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  }

class ArrayBufferConverter {
    load() {

    }
    toString(buffer) {
        return String.fromCharCode.apply(null, new Uint16Array(buffer))
    }
}

let conv = new ArrayBufferConverter
console.log(conv.toString(getBuffer))