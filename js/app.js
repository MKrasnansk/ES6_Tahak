console.log(`__________Arrow__________`);

    let pole = [
        'Mike',
        'Juro',
        'Fero Masar',
        'Ignac Bocko'
    ];
    pole.forEach(name => console.log(name));
    //alebo
    pole.map(name => console.log(name.length));
    //
    pole.map((name, i) => {
        let times = 100;
        return name.length * times;
    });
console.log(`_________This__________`);
    function Umieracik(){
    
    this.name = 'Ignac Bocko';
    this.diagnoza = 'debil';
    this.health = 100;
    //vdaka sipke prevezme this z funkcie a nie zo setInterval 
    setInterval(()=> {
        this.health--;
        console.log(`${this.name} Zdravie = ${this.health}`);
    },1500);
    }
    // let ignac = new Umieracik();
console.log(`_____Block Skope {let}_____`);

    function letvar(bool){
    if (bool) {
        let thing = 'nieco';
        console.log(thing);
    }else{
        console.log(thing);//dostaneme chybu pretoze thing je vytvorena iba pre blok if-u
    }
    //implicitny blok
    //explicitny blok
    if (bool) {
        {
            let thing = 'nieco';
            console.log(thing);
        }
    }
    }
    for (let i = 0; i < 5; i++) {
        // setTimeout(()=> console.log(i),i*1000);       
    }//vdaka let funguje podla predstav
   
console.log(`_____const_____`);
    //nemozes menit const
    const novePole = pole;
    novePole.forEach(name => console.log(name));
    novePole.pop();    
    novePole.pop();    
    novePole.pop();
    novePole[1] = 'Michal';
    novePole[3] = 'Jano';
    novePole[4] = 'Jana';
    novePole.pop();
    //daju sa menit veci ale iba omedzene
    console.log(novePole);
console.log(`_____property names_____`);
    let name = "Mario";
    let player = {
        name,
        getName(){
            return this.name;
        },
        ['cigos' + name]: true
    };
    console.log(player.name);
    console.log(player.cigosMario + ' je cigan ' + name);
console.log(`_____object destructuring_____`);

    // let race = {
    //     meno: 'Michal',
    //     race: 'rally',
    //     skill: 'master',
    //     position: 1
    // } 
    // let {meno, position} = race;
    // console.log(race);

    // let data = fetch('https://itunes.apple.com/search?term=elan')
    //     .then(res => res.json())
    //     .then((out) => data = out)
    //     .then(()=>{
    //         let {artistName, trackName } = data.results[3];
    //     console.log(` ${artistName} / ${trackName}`);
    //     })


console.log(`_____...rest parametre {reduce}_____`);
    // function resty(){
    //     console.log(this);
    //     console.log(arguments);
    // }
    // resty(1,2,3);
    function rest(times, ...rest){
        return rest.reduce((sum, value)=> sum + value) * times;
    }
    console.log(rest(100, 1, 2, 4, 3));
    console.log(rest(22, 3, 2));
console.log(`_____...rest spread {}_____`);
    console.log(pole);
    function spread(one, two, three, four) {
        console.log(one, three, four);
    }
    spread(...pole); //rozprestrie pole do premennych

console.log(`_____default parametre_____`);
    function discount(price, percent = 20){
        price = price - (price * percent/100);
        return price.toFixed(2);
    }
    console.log(discount(1000)); //pouzije nadstaveny default
    console.log(discount(1000, 10 * Math.PI)); //prebije sa default
    console.log(discount(1000, 0)); //prebije sa default

console.log(`_____template strings_____`);
    let title = 'Tahak';
    console.log(`title ma v sebe ${title}`);
    console.log(
    `<ul>
        <li></li>
        <li>
            <p>${title}</p>
        </li>
        <li></li>
    </ul>
    `.toUpperCase());

console.log(`_____tagged strings_____`);
    function light(string, ...values){
        // console.log(string);
    let str = '';
    string.forEach((string, i) => {
        str += `${string} <span class='h1'> ${values[i] || ''}</sapn>`; //vzdi zoberie jednu a pripne potom pripocita a ak je i undefined tak || da prazdny string
    });
    return str;
    }
    const a = 'Snickers';
    const age = '100';
    const sentence = light`Moj pes sa vola ${a} a ma ${age} rokov`;
    console.log(sentence);
    // document.body.innerHTML = sentence;


console.log(`_____APIs strings Math Number_____`);

    let string = '>'.repeat(5) + 'super' + '<'.repeat(5);
    console.log(string); //opakuje

    let veta = 'Tato veta je priklad ku stringom.'
    let bool = veta.includes('priklad');
    console.log(bool);
    console.log(pole.includes('Mirec'));//obsahuje?
    console.log(pole.includes('Michal'));

    console.log(veta.startsWith('Tato veta')); //zacina
    console.log(veta.startsWith('Ta'));
    console.log(veta.startsWith('To'));

    console.log(veta.endsWith('gom.'));// konci
    console.log(veta.endsWith('stringom.'));

    //treba dostudovat
    // Number.EPSILON
    // Number.isFinite()
    // Number.isInteger()
    // Number.isNaN()

    // Math.cosh()
    // Math.sinh()
    // Math.hypot()

console.log(`_____new array APIs_____`);
    // let najdi = pole.find(name => name.length > 3);//ma viac ako 3 znaky
    // console.log(pole);
    // console.log(najdi);
    pole.push('Jachym Fidel');
    pole.push('Jaromir Jagr');
    let najdi = pole.filter(name => name.split(' ').length >= 2); // vyfiltruje tych ktore mana su zlozene z dvoch slov
    // let najdiPrveho = pole.find(name => name.split(' ').length >= 2); //nejde dostudovat
    console.log(pole);
    console.log(najdi);

    let najdiIndex = pole.findIndex( name => name.length >=4);
    console.log('Index z pola je ' + najdiIndex );

    let niektori = pole.some(name => name.length > 4);
    console.log('ma niekto tolko znakov? ... ' + niektori);


    const druhePole = [
        {name: 'Judas'},
        {name: 'Livia'},
        {name: 'Michael', admin: true}
    ]
    let maVsebe = druhePole.some(druhePole => 'admin' in druhePole);
    console.log('obsahuje niektory objekt aj ADMIN? ...' + maVsebe);

    let majuVsebe = druhePole.every(druhePole => 'admin' in druhePole);
    console.log('obsahuju vsetci ADMIN? ...' + majuVsebe);

    let vsetci = pole.every(name => name.length > 4);
    console.log('maju vsetci tolko znakov? ... ' + niektori);


    let vytvorPole = Array.of(1,2,3,4,5,6);
    console.log(vytvorPole);
    // Array.fill()
    // Array.copyWithin()

console.log(`_____iterators {for of} {array}_____`);
    let iter = pole.entries();
    let next = iter.next().value;
    console.log(next);
    next = iter.next().value; //posunie na dalsi
    console.log(next);
    next = iter.next().done;//je koniec pola?
    console.log(next);
    next = iter.next().value;
    console.log(next);

    for (let premena of pole) { //prebehne cele pole
        console.log(premena);
    }

    function doMath(){
        for (const arg of arguments) {
            console.log(arg);
        }
    }   
    doMath(1,2,3,4,5)

console.log(`_____Generator_____`);
    function * kitten(){
        yield ' Linz';
        yield 'Kerry';
        yield 'Heydi';
    }

    let gener = kitten();
    console.log(gener.next().value); //postupne vypise 
    console.log(gener.next().value);
    console.log(gener.next().value);

    function* idGen(){
        let id = 0;
        while (true) {
            yield ++id;
        }
    }
    let gen = idGen();
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());


console.log(`_____Promise_____`); 

    function start(id, time){
        return new Promise((resolve, reject)=>{
            setTimeout(()=> resolve(`timer ${id} done`), time)
        })
    }
    // let timer1 = start(1, 4000);
    // timer1.then(res => console.log(res));
    // start(2, 2000).then(res => console.log(res));
    // start(3, 5000).then(res => console.log(res));

    // timer1.then(res => {//sa odpali zaroven s ukoncenym timerom
    //     console.log(res);
    // })
    (async function(){
        try{
            let time1 = start(1, 4000);
            let time2 = start(1, 2000);
            let time3 = start(1, 5000);

            await time1; //vdaka await idu paralelne a neblokuju sa
            await time2;
            await time3;
        
            // console.log( 'done!');
        }
        catch(err){
            console.error(err);
        }
    }());
    //////
    Promise.all([start(1,4000), start(2,2000), start(3,3000)]) //pockaju sa a odpalia sa naraz
            // .then(res => console.log('vsetko hotove', res))
            .catch(err => console.error(err, ' tu je chyba'));
    Promise.race([start(1,4000), start(2,2000), start(3,3000)]) //pockaju sa a odpalia sa naraz
            // .then(res => console.log('natiahlo prveho najrychlejsieho ', res))
            .catch(err => console.error(err, ' tu je chyba'));

console.log(`_____Promise funkcia get_____`);

    function get(url){//funkcia na getovanie JSON-u
        return new Promise(function(resolve, reject){
            var req = new XMLHttpRequest();
            req.open('GET', url);

            req.onload = function(){
                if (req.status == 200) {
                    resolve(JSON.parse(req.response)); //JSON.parse treba vzdy tak tuto to automaticky upravi
                }else{
                    reject(Error(req.statusText));
                }
            };
            req.onerror = function(){
                reject(error("Network Error"));
            };
            req.send();
        });
    }        

    let getovanie = get('https://jsonplaceholder.typicode.com/posts')
            .then(res => out = res)
            .then(res =>  get('https://jsonplaceholder.typicode.com/users/' + res[0].id)
                )
            .catch(err => console.error(err))
                // .then( res => console.log(res.phone, res.name, res.email )) //vytiahne iba druhy get
                .catch(err => console.error(err));
                
console.log(`_____async await_____`);

    try{
        get('https://jsonplaceholder.typicode.com/comments')
            .then(res => get('https://jsonplaceholder.typicode.com/posts/' + res[0].postId))
            .then(res =>get('https://jsonplaceholder.typicode.com/users/' + res.userId) )
            // .then(res => console.log(res.name))
            .catch(err => console.error(err));
        }
    catch(err){
        console.error(err);
    }

    (async function(){
        try{
            let comments = await get('https://jsonplaceholder.typicode.com/comments');
            let post = await get('https://jsonplaceholder.typicode.com/posts/' + comments[0].postId);
            let user = await get('https://jsonplaceholder.typicode.com/users/' + post.userId);

            // console.log(user, user.name, user.email, user.company.name);
            }
        catch(err){
            console.error(err);
        }
    }())

console.log(`_____set_____`);

    console.log(pole);
    pole = new Set(pole);
    console.log(pole);
    if(pole == undefined){
        console.log(this);
    }
    pole.add('Michal');
    pole.add('Frenk');
    pole.add('Jano');
    pole.add('Ondro');
    pole.add('Ondro');
    pole.add('Mario');
    pole.add('Mario');
    pole.add('Mario');
    console.log(pole);
    console.log(pole.size);

    // pole.forEach(val => console.log(val + ' -forEach'))
    for (const val of pole) {
        // console.log(val + ' -forOf');
    }
    let ma = pole.has('Michal'); //ma v sebe?
    console.log(ma);


    let input = document.querySelector('input'),
        button = document.querySelector('button');

    let tags = new Set();
    button.addEventListener('click', ()=>{
        tags.add(input.value);
        console.clear();
        tags.forEach(val => console.log(val))
    })


console.log(`_____map_____`);

    let inp = document.querySelector('input');
    let but = document.querySelector('button');

    var meta = new Map();
    meta.set(inp, {piseSa: false, nice: true});
    meta.set(but);
    // console.log(meta);
    for (let mam of meta.keys()) {//keys
        console.log(mam);
    }
    for (let mam of meta.values()) {//values
        console.log(mam);
    }
    for (let mam of meta.entries()) {
        console.log(mam);
    }
    console.log(meta.get(input)); //object naviazany priamo
    console.log(meta.size);
    console.log(meta.has('nic'));
    console.log(meta.has(input));
    meta.delete(input);
    console.log(meta);
    meta.clear();
    console.log(meta);

    const slovnik = new Map();
    slovnik.set('en', new Map()
        .set('ano', 'yes')      
        .set('nie', 'no')      
    );
    slovnik.set('nj', new Map()
        .set('ano', 'ja')      
        .set('nie', 'nein')      
    );
    slovnik.set('rus', new Map()
        .set('ano', 'da')      
        .set('nie', 'net')      
    );
    console.log(slovnik.get('nj').get('nie'));

console.log(`_____symbol_____`);

    let one = 'hey';
    let two = 'hey';
    console.log(one === two);

    one = Symbol('hey');
    two = Symbol('hey');
    console.log(one === two);

    let obj = {
        name: 'Michal',
        how: 'dobre'
    }
    // obj.how = 'sad';//prepise
    let how = Symbol('novy how'); //neprepise
    obj[how] = 'feel saad';
    console.log(obj);

    how = Symbol('dalsi how'); //neprepise
    obj[how] = 'feel dobre zas';
    console.log(obj); //len prida je vzdy unikatny

    for (let key in obj) {
            console.log(key);
        } //symbol ostane skrity


        let email = Symbol('email');

        let legenda = {
            name: 'Vaso',
            age: '88',
            [email]: 'vaso.patejdl@gmail.com'
        };

        console.log(legenda); //ako programator mam pristup 

        for (const key in legenda) {
            console.log(key); //inac ostane skrity
        }
        
        console.log(JSON.stringify(legenda)); //symbol ostane skrity
        console.log(legenda[email]);
        console.log(Reflect.ownKeys(legenda));// v podstate len poloskrite

console.log(`_____geters & seter_____`);

    let object2 = {
        name: 'dege',
        last: 'onona',
        old: '88',
        get Name(){ //uprava pre citatelny zapis
            return this.name.charAt(0).toUpperCase() + this.name.slice(1);
        },
        get Last(){
            return this.last.charAt(0).toUpperCase() + this.last.slice(1);
        },
        get fullName(){
            return this.Name + ' ' + this.Last;
        },
        get age(){
            return this.old;
        },
        set age(val){
            if (!Number.isInteger(val)) {
                return console.error(`musis zadata normalne cislo`);
            }
            this.age = val;
        }
    };
    object2.age = 'nula'; // nastane chyba
    console.log(object2.fullName);
    // console.log(onbject2.age);

console.log(`_____Proxy_____`);

    let Mario = {
        name,
        health: 3,
        jump(){
            console.log('jumps');
        }
    }
    Mario = new Proxy(Mario,{
        get: function(target, name){ //da hlasenie pasca ked chce niekto pristupit k vlastnostiam
            console.log(`reading ${name}`);
            return target[name];
        },
        set: function(target, name, value){ // pasca ked chce niekto zmenit hodnoty
            console.log(`writing ${name} to  ${value}`);
            target[name] = value;
        }
    });
    Mario.health++;
    Mario.health++;

    console.log(Mario);
    console.log(Mario.name);
    console.log(Mario.health);

    let leg = {
        first: 'vaso',
        last: 'patejdl',
        age: 44
    }

    leg = new Proxy(leg, {
        set: function(target, name, val){
            if(name === 'age'){
                if(!Number.isInteger(val)) return console.error('cislo treba'); ;
            }
            else if( name === 'name'){
                if(val.length > 50) return console.error('dlhe to je');
            }
            target[name] = val;
        }
    });
    leg.age = 'nnn';
    leg.age = 99;
    console.log(leg.age);
    leg.name = 'imasuinasiufnaamsmiomoaimsadimsioamsiunfiunauisfnuanfiuasnfnaui';
    console.log(leg.name);

console.log(`_____OTHER_____`);

    console.log('0.00'.padStart(20));
    console.log('156.00'.padStart(20));
    console.log('12,156.00'.padStart(20));
    console.log('6.00'.padStart(20));
    console.log('1110001110106.00'.padStart(20));

    console.log('0.00'.padEnd(20, '.'), ':');
    console.log('156.00'.padEnd(20, '.'), ':');
    console.log('12,156.00'.padEnd(20, '.'), ':');
    console.log('6.00'.padEnd(20, '.'), ':');
    console.log('1110001110106.00'.padEnd(20, '.'), ':');

console.log(`_____Class_____`);

    class Human {
        constructor( first, last, age){
            this.first = first;
            this.last = last;
            this.age = age;
        }
        get fullName(){
            return this.first + ' ' + this.last;
        }
        who(){
            return `${this.fullName} ma ${this.age} rokov. `;
        }
    }
    let person = new Human('Tomas', 'Deebbs', 77);
    console.log(person);
    console.log(person.fullName + '  ..cele meno');
    console.log(person.who());
    let people = [
        new Human('Tomas', 'Deebbs', 77),
        new Human('Teodora', 'Boasfn-san', 19),
        new Human('Cigani', 'Dzamore', 13)
    ]
    people.map( person => console.log(person.who()));

    class RandomArray extends Array{
        constructor(...args){
            super(...args);
        }
        static random(arr){
            return arr[Math.floor(Math.random() * arr.length)]
        }
    }


    class Legend extends Human{
        constructor( ...args){
            super( ...args);

            this.hits = [
                'One More',
                'Sad Gagster',
                'Owl Suiscide',
                'Oven Paul',
                'Ricky Panova',
                'Sandra Trapas',
                'Maria Terezia',
                'Dot-feksa Pulsar'
            ];
        }

        writeHit(){
            let hit = RandomArray.random(this.hits);
            hit = hit.toUpperCase();
            return super.who() + `\n bla bla bla ${hit}.`;
        }

    }
    let legolas = new Legend('Frodo', 'Pitel', 14);
    console.log(legolas.writeHit());
    console.log(legolas.writeHit());
    console.log(legolas.writeHit());
    console.log(legolas.writeHit());
    console.log(legolas.writeHit());


console.log(`_____Modules Patern_____`);

    //do scriptu app.js v index.html treba pripisat type="module"
    //potom mozes pouzivat import a export

    /*
    dva moduli...
    1.app.js --->>>

    import{gootNumber, doMath} from "./math.js"  //po premenovani import{dobreCislo, mat}

    console.log(gootNumber);  //po premenovani(dobreCislo)
    console.log(doMath(1,2,3,4,4) + "9");  //po premenovani(mat(2,23,32,4,43))

    2.math.js --->>>

    let gootNumber = 44;

    function doMath( ...rest){
        return rest.reduce((sum, val) => sum+val)
    }

    export{
        doMath as mat, //bude sa volat 'mat' v importe
        goodNumber as dobreCislo // bude sa volat dobreCislo v importe
    }


    ak chces exportovat iba jednu vec staci oznacit ako defaultny export

    1.app.js --->>>

    import Mario from "./math.js";

    Mario.jump();


    2.math.js --->>>
    export default class Mario{
        static jump(){
            console.log('jumpa!')
        }
    }



    */
console.log(`_____Defer async_____`);
    /*
    <script defer src="./src/app.js"> </script>

    defer sa tiez stahuje spolu s html
    defer sa spustaju v poradi
    defer pocka kym sa nacita html a odpali sa potom


    <script async src="./src/app.js"> </script>

    async sa tiez stahuje spolu s html ale odpali sa hned ako sa dokonci stahovanie


    <link rel="preload" as="script" href="./src/app.js">
    <link rel="preload" as="image" href="./src/img/obrazok.jpg">
    <link rel="preload" as="font" href="font..." crossorigin>
    "preload, prefetch, preconnect"

    cez link sa da nadstavit priorita stahovania
    crossorigin: ak sa chces vyhnut prebliknutiu zakladneho textu s novym
    */

console.log(`_____progres_____`);

    'use strict'
    const progressBar = document.querySelector('progress');

    let max = document.body.scrollHeight - window.innerHeight;

    progressBar.max = max;

    window.addEventListener('scroll', ()=> {
        progressBar.value = window.pageYOffset;

        clearTimeout(debounceTimer); //debounce 
        debounceTimer = setTimeout(()=>{
            console.log( ' pozicia ulozena debouncTimer pre progressBar');
        }, 1000);
    });
    window.addEventListener('resize', ()=> {
        progressBar.max = (document.body.scrollHeight) - window.innerHeight;
    });


console.log(`_____throttle_____`);

    // nevidalo doucit treba ...Human. _.lodash je fajn 
    /*
    let scheduled = false,
        lastEvent;

    addEventListener('mousemove', (event)=>{

        setTimeout(()=>{
            lastEvent = event;
            
            if (!scheduled) {
                sheduled = true;
                
                displayCoords(lastEvent);
                scheduled = false;
            }
        },2000);
    });

    function displayCoords(event){
        document.body.textContent = `Mouse at ${event.pageX}, ${event.pageY}`
        console.log('fired');
    }
    */

console.log(`_____debounce_____`);

    const debInput = document.querySelector('.debounce input');
    let debounceTimer; //funguje premaze a po 500ms odpali

    addEventListener('keyup', (event)=>{

        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(()=>{
        fauxAjax();   //alebo // displayCoords(event);
        },500);
    });

    //debounce pouzitie v tahaku pre progress bar

    // function displayCoords(event){
    // document.body.textContent = `Mouse at ${event.pageX}, ${event.pageY}`
    // console.log('fired');
    // }

    function fauxAjax(){
        let start = Date.now();
        let stopTime = Math.floor(Math.random() * 200) + 200;

        while (Date.now() - start < stopTime){
            //sleep
        }
        console.log(Date.now(), '...tvoj fake JSON ...');
    }



console.log(`_____css triggers_____`);
    /*
    nepouzivat pretoze menia layout alebo reflow
    prekresluje sa to spomaluje stranku

    po reflowe nasleduje paint... 
    */



console.log(`_____devTools - performance_____`);
    /*
    performance
    odhaluj bottleneck
    mozes nahravat a zistovat kde je spomalenie

    will-change
    dava sa pred komplikovany element aby sa pocitac pripravil dopredu 

    60fps -  16ms na spustenie kodu  - prehliadac
    //10ms na kod

    1.stahovanie
    2.html parsuje
    3.DOM tree, CSS object model
    4.Render Tree - letmi nastrel
    5.Latout render tree / FLOW - kombinuje html a css ked sa nieco meni vykonava sa RE-FLOW, (fialovy rendering v performance tabe )
    6.Paint


    rAF=  reques animation frame
    requestAnimationFrame(tick);
    kresli iba v aktivnom tabe
    aj ked je user zoscrollovany na spodok stranky kde animaciu nevidi tak ju zastavi
    rAF fram-i su kreslene len ked je prehliadac pripraveny kreslit
    ak chces nieco animovat s JS tak pouzivat treba rAF
    nikdy setTimeout
    
    (function(){
       input.style.transform = `translate(${x += 5}px, 0px)`;
       requestAnimationFrame(tick);
    }())
  
vue_materia    const tick = function(){
        console.log(perfomance.now())
        setTimeout(tick, 1000);
    }
    setTimeout(tick, 1000);
    */

console.log(`_____will-change_____`);

/*


*/

console.log(`_____will-change_____`);
