let average=0;
let myJSONObj

let request = new XMLHttpRequest();

request.open( 'GET', '../../data.json' );
request.send(  );
request.onreadystatechange = () => {

   if ( request.readyState === 4 && request.status === 200 ) {
      
      myJSONObj = JSON.parse( request.responseText );
      // console.log(myJSONObj);
      let acum = 0;
      for (let i = 0; i < myJSONObj.length; i++) {
         acum += myJSONObj[ i ].score;  
      }
      // console.log( ( acum / myJSONObj.length ).toFixed( 0 ) );
      average = ( acum / myJSONObj.length ).toFixed( 0 );
      getJSONObj(myJSONObj)
      getAverage( average );
      
   }
   
};

const getAverage = average => {
   const averageResultSPAN = document.querySelector( '.big-number' );
   // console.log( averageResultSPAN );
   averageResultSPAN.textContent = average;
};

const getJSONObj = arrayObject => {
   
   createHTML( arrayObject );
};

const createHTML = ( arrayObject ) => {
   arrayObject.forEach( category => {
      // console.log((category.category).charAt(0).toUpperCase() + (category.category).slice(1));
      const categoryDIV = document.querySelector( `.${(category.category).charAt(0).toLowerCase() + (category.category).slice(1)}` )
      // console.log(categoryDIV.lastElementChild);
      const categoryScoreP = document.createElement( 'P' );
      categoryScoreP.classList.add( 'p-value' );
      categoryScoreP.textContent = category.score;
      
      const categorySpan = document.createElement( 'SPAN' );
      categorySpan.classList.add( 'value' );
      categorySpan.textContent = '/100'

      categoryScoreP.appendChild( categorySpan );

      categoryDIV.appendChild( categoryScoreP );
   } );
}