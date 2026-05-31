console.log(score);  // ReferenceError: Cannot access 'score' before initialization
let score = 100;

{
    //---- TDZ for "score" starts here----
    //      console.log(score); //ReferenceError!
    //      scroe = 50;         //ReferenceError!
    //      typeof score;       //ReferenceError!
    //----TDZ for "score" ends here---
    let score = 100;   //Declaration reached, TDZ ends
    console.log(score);

}