

//  =============================== 4 video =============================== //
// Write below inside <> </>


      {/* Babel compiles JSX down to React.createElements() calls or proper JS */}
      {/* The below code is JSX */}
      {/* In react we have 2 components: func and class */}
      {/* JSX is syntax extension of JS. It prefers camel case */}
      {/* In react if you are using JSX so you have to return only 1 element. But you can use fragment ( <> </>)  */}
      {/* Why () after return cuz JS put ; by it self which will destroy our app by putting ; */}
      {/* React use webpack so we can import anything and it will automatically give funcationality of that file */}
      {/* Whatever we write in {} will be resolved */}
      {/* JSX IS HTML. We have to change it like replacing className, For, tabIndex, and end every elemet with /.
          This is called as unterminated JSX content which is error */}
      {/* If i am making navbar as component so well write like <Navbar /> */}
      {/* React jo JSX(HTML) phle se ane vali he usko phle se synatize kardeta he <b>Harry</b>. we wiil see it like
          <b>Harry</b>. Maybe that <b>Harry</b> is entered by any user so we dont want any bug in that. Thats why he  
          treats it as string */}

      {/* See the SS for how websites work */}
      {/* In SPA we make request at once and it will giva bundle of HTML, CSS, JS. And JS takeover that website.
          Now when you move to another page JS hpopulate the same page via API. Basically i dynamically chabge the 
          content if anyone hover to the next page in the requested website */}
      {/* We can save bandwidth using SPA */}
      {/* We dont give node module folder to anyone */}
        

      
      {/* Making Custom Navbar */}
          {/* <nav>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
          </nav>
          
          <div className='img'>
            You can see how default React logo is imported 
          </div>

          <div className="container">
            <h1>Hello {name} </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, vitae corporis commodi ab, earum sit voluptatum aspernatur laborum voluptatem aperiam dolorem natus exercitationem repudiandae recusandae consectetur enim iste. Dignissimos, maiores.</p>
          </div> */
    } 



    //  =============================== 5 video =============================== //
      
    

    /*
        . Now we are adding links of Bootstrap in public folder in index.html
 
        . The below you have to write in above function
        . let name = 'Areeba'
        . We have changed class and # with /
        . Now when i click on anything after writing Textutils in place of navbar. It will redirect to HomePage why cuz replce # with /
        . We have seen how Bootstrap is added in react proj, how to take components of BS and use in react proj and what things to replace. Like
          class etc
        . We have seen react version.
        . Never use any secret file like passwords, credentials in public folder, cuz it is publically to everyone
        . We will build the app always to host so use npm run buld which is optimized and then deploy it on server.
          This server is only for our development it can't hold more users

    */





    //  =============================== 6 video =============================== //

    /* OBJECT : Discussion on props
      . Props = properties
      . We can make custom components and pass something like values, obj, var so that he can use it inside it and render itself
      . We dont have to import react cuz we are using func based component and inside that we are not using react
      . JS concept : Named and Default Export
      . Make file name extension as .mjs
      . And write this command to run :  "node .\module1.mjs"
      . if use the default eexport and when we are acccessing taht on another file with diff name it will take use that 
        default export
      . Now Understanding Props.
      . For this we make another component. Make comp so that custom comp will be on same folder
      . Make comp with capital letter
      . We only use component tags in App.js. So that we can reuse these components by passing props.
      . If we are reusing the components and we have to change things in that comp we can pass them as props.
      . So now if we dont pass the props in that comp that comp is a blank comp.
      . We are passing props as string it can be an obj, link. If alot of props we can group them in obj and pass obj. And render the value of 
        objs
      . We dont change the comp func text once created we only change props

      . Now discussig proptypes. We have to import it using: impt
      . Proptypes we are using to define the type of that props so in future you cant pass anything else like no
      . We can also set Default Props. If i don't pass the props so use default props
      . we can also use isRequired property. If we set that and is i dont pass as prop and default props is // then this will give error
      . We have learnt propTypes, defaultProps(What value to use if not passing value).
      . Always set default props
      . In Navbar we have only discussed about how to pass and use props


    */



      
    //  =============================== 7 video =============================== //
    /* OBJECT: How to handle the event, How to setState, useState hook help us to make state var.
               We have listen for onChange(), Converting text from l to U with reloading the page
      Now using TextForm.JS
      Shift + tab for back the div elements
      we have change the names, formatting in tags.
      Now we are adding btns so that when we click some func inside comp renders. Use className="btn btn-primary"
      
      Now discussing states
      If i have made the component it has state
      States: If comp is empty it is his state
              If i have written something that is his state
              So basically what ever the content here i want to make them a var. So making it part of state
      Props: We pass props to comp and that props render in our component
      State: Belong to comp
      So import useState from React
      useState: It is a hook
      Hooks are new edition. In class based comp we can see alot of func. But func comp are use widely
      Use newState before return. Using setText we can update any text without reloading the page.
      But i am using func so how to use the useState cuz in class to set the state we use this.state. But in func to set
      the state using Hooks()
      Hooks: Help in using features of class without making class
      eg:
        const [text, setText] = useState("Enter")
        Set the R.H.S as a 1st parameter means in text
        To update text use the updationFunc("Hello") not like text = "Hello"

      Now using btns but he is saying make prototype of onChange=(handleOnChange)

      Now when i am clicking Uppercase button it is rerendering it self cuz inside that we have setText().
      Why the content is changing cuz it is a state varif i write value ={hello} it will not change cuz it is normal var.
      By default react dont watch whole var

      When i am typing onChange func is running but i cant type cuz i have written value={text}. 
      If i write/change something onChange() will running
      When ever you are listening something from an event in such a way that the above i am listening for onChange() this func will run and we get event obj for free.
      Well use this func alot of time when using input, textareas.

      Whenever user change textarea so value which is text value={text} will change at that moment like value + Whatever u write
      using (event.target.value). Now you can type in textareaa. So whenever i type onChange() run and whatever i type will be concatenate with text. So our text is also updating

    */
    


    //  =============================== 8 video =============================== //
    /*
      text.split(" ") makes an array and length of an array is word text.split(" ").length
      Inside the container in APP.js we are using About Comp


    */


      //  =============================== 10 video =============================== //

      /*
        style={myStyle}, myStyle is obj
        If we want to change the style using inspect:
        1. Go to inspect 
        2. and go to element and select the tag for whic you want to change style
        3. Now go to console and use $0 to refer that element and write $0.style.backgroundColor = 'cyan'
        $0 is use to refer the element. Dont use in vscode
        React use camel case just like JS
        We are making style as a state var
        In this video we are using 2 state var:
          const [btnText, setBtnText]
          const [myStyle, setMyStyle]
        In About.JS


      */

    //  =============================== 12 video =============================== //

    /*
      I want to manage the whole state of my website or react application using App.JS. Means making all controls in App.JS
      e.g.
        To Enable dark mode i will make all of that var in app.js. 
      ` ` => Tempelate Literal . After writing this inside it everything is string. So when i use backtick`` i can use JS using ${}
      text-light: To change the text to white
      {{}} : Outer { } is for writing JS and { } is for writing Obj 
      #dedde9

    */


    //  =============================== 13 video =============================== //
    /* Object : Working in Alert Component
      We are making alert state: is obj here
      showAlert() help to show alert messages
      TextForm ko jab koi alert karna hoga to hum usee showAlert() pass karain ge 
      If this becomes (  props.alert &&  ) false in Alert.js then after && everything will run. If before && whatever written is false
      then after && will no run. Simple If first becomeas true then Second will evaluate and vice versa

    */

    //  =============================== 13 video =============================== //
    /*  Object:
      Changing Favicon and title in index.html
      We have change the title whne we are shifting from Light to Dark mode and vice versa. But this is not prefered. 
      eg. 
        FB use to to show how many message you have in the title or gmal use it to show how many unread messages you have
      
      1 thing which is a bad user experience which is telling you that you have a virus.
      So how you can do this using setInterval() every 2 sec

    */

   //  =============================== 13 video =============================== //
   /*
      To navigate from one page to another page in a same website we can use Rect Router
      React always do partial matching so use exact in the path
   */

  //  =============================== 19 video =============================== //
  /*
    Removing Empty string from array when using split.
    We get this after using split = [""]. If nothing is written.
    So i want to remove allthe blanks from this. We can do this using "filter()" Which take func as a parameter
    .filter() is a higher array order method
    .filter((element) => {return element.length != 0}).length
    element : element of an array
    element.length != 0 : If length of that element != 0 it will not stay in that array
    cls: Cumulative layout shift. So when alert disappear our layout shift


  */