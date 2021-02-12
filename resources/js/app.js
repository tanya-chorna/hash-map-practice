class HashMap {
    constructor(size = 0) {
      this.hashmap = new Array(size)
        .fill(null);
    }
  
    hash(key) {
      let hashCode = 0;
      for (let i = 0; i < key.length; i++) {
        hashCode += hashCode + key.charCodeAt(i);
      }
      return hashCode % this.hashmap.length;
    }
  
    assign(key, value) {
      const arrayIndex = this.hash(key);
      this.hashmap[arrayIndex] = value;
    }
    
    retrieve(key) {
      const arrayIndex = this.hash(key);
      return this.hashmap[arrayIndex];
    }
  }
 
  
  const bsm = new HashMap(4);
  bsm.assign('gm', 'People with a growth mindset feel their skills and intelligence can be improved with effort and persistence. They embrace challenges, persist through obstacles, learn from criticism and seek out inspiration in others/’ success');
  bsm.assign('per', 'Continuance or repetition of a particular behavior, process, or activity despite cessation of the initiating stimulus. ');
  bsm.assign('pr', 'Personal responsibility or Individual Responsibility is the idea that human beings choose, instigate, or otherwise cause their own actions.');
  bsm.assign('fo', 'A time perspective that is focused on the future, especially on how to achieve one’s desired goals.');
 
  function showResponse() {
    document.getElementById("response").innerHTML = bsm.retrieve(document.getElementById("bsm").value);
  }
    
 