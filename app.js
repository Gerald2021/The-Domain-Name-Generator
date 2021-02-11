var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var domain = [".com", ".es" ];

for (let p = 0; p < pronoun.length; p++) {
    
    for (let a = 0; a < adj.length; a++) {
      
      for (let n = 0; n < noun.length; n++) {

            for (let d = 0; d < domain.length; d++) {
    
                console.log(pronoun[p] + adj[a] + noun[n] + domain[d]);
            }
    
        }
    } 
}
