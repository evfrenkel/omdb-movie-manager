(this["webpackJsonpomdb-movie-manager"]=this["webpackJsonpomdb-movie-manager"]||[]).push([[0],{52:function(e,t,a){e.exports=a(62)},62:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),i=a(13),l=a.n(i),n=(a(57),a(76)),o=a(77);class h extends r.a.Component{constructor(...e){super(...e),this.handleSelect=(e,t)=>{this.props.handleChooseView(e)}}render(){return r.a.createElement(n.a,{bg:"dark",variant:"dark"},r.a.createElement(n.a.Brand,null,"Movie Explorer"),r.a.createElement(n.a.Toggle,null),r.a.createElement(n.a.Collapse,{className:"justify-content-end"},r.a.createElement(o.a,{variant:"pills",activeKey:this.props.viewNow,onSelect:this.handleSelect},r.a.createElement(o.a.Item,null,r.a.createElement(o.a.Link,{eventKey:"search"}," Search ")),r.a.createElement(o.a.Item,null,r.a.createElement(o.a.Link,{eventKey:"faves"}," Favorites ")))))}}var c=h,p=a(79),m=a(40),d=a(78),v=a(67),u=a(41),g=a(68);class E extends r.a.Component{constructor(...e){super(...e),this.handleToggleFav=()=>{this.props.toggleFavorite(this.props.movie)}}render(){if(this.props.loading)return r.a.createElement(p.a,{active:!0,now:100});let e=r.a.createElement(m.a,{onClick:this.handleToggleFav},"Add to Favorites");return this.props.isFave&&(e=r.a.createElement(m.a,{onClick:this.handleToggleFav},"Remove From Favorites")),r.a.createElement(d.a,null,r.a.createElement(d.a.Body,null,r.a.createElement(v.a,null,r.a.createElement(u.a,{sm:12},null!==this.props.movie.poster_path&&r.a.createElement(g.a,{src:"https://image.tmdb.org/t/p/w500/"+this.props.movie.poster_path,alt:"Poster",fluid:!0})),r.a.createElement(u.a,{sm:12},r.a.createElement("h4",null," ",this.props.movie.title," "),r.a.createElement("h4",null," ",this.props.movie.release_date," "),e))))}}var S=E;class y extends r.a.Component{render(){const e=Object.keys(this.props.allFaves).map(e=>r.a.createElement(u.a,{sm:4,md:3,key:e},r.a.createElement(S,{movie:this.props.allFaves[e],loading:!1,isFave:!0,toggleFavorite:this.props.toggleFavorite})));return r.a.createElement(v.a,{className:"mt-4 mx-3"},e)}}var w=y,C=a(69);class F extends r.a.Component{render(){return this.props.visible?r.a.createElement(C.a,null,r.a.createElement(w,{allFaves:this.props.faves,toggleFavorite:this.props.toggleFavorite})):null}}var f=a(49),b=a(70),k=a(71),R=a(80),x=a(72);class M extends r.a.Component{constructor(...e){super(...e),this.state={currentStr:"",loading:!1},this.handleTextInputChange=e=>{this.setState({currentStr:e.target.value})},this.handleSearchTypeChange=e=>{this.props.searchTypeChanged(e.currentTarget.value,this.state.currentStr)},this.handleHistoryItem=e=>{this.setState({currentStr:e}),this.props.newSearch(e)},this.handleSubmit=(e,t)=>{e.preventDefault(),this.props.newSearch(this.state.currentStr)}}render(){const e=this.props.searchHistory.map(e=>r.a.createElement(f.a.Item,{key:e,eventKey:e,onSelect:this.handleHistoryItem},e));return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(b.a,{controlId:"title"},r.a.createElement(k.a,null,"Search by Title"),r.a.createElement(R.a,{type:"text",value:this.state.currentStr,onChange:this.handleTextInputChange})),r.a.createElement(b.a,null,e.length>0&&r.a.createElement(x.a,{title:"Search History",id:"history"},e)))}}var N=M,T=a(47);class H extends r.a.Component{constructor(...e){super(...e),this.handleClick=()=>{this.props.itemClicked(this.props.movie.id)}}render(){return r.a.createElement(T.a,{onClick:this.handleClick,active:this.props.active},r.a.createElement("strong",null," ",this.props.movie.title," "),"("+this.props.movie.release_date+")")}}var I=H,_=a(73);class L extends r.a.Component{constructor(...e){super(...e),this.state={selected:this.props.selectedMovieID},this.rowClicked=e=>{this.props.itemClicked(e),this.setState({selected:e})}}render(){const e=this.props.movies.map(e=>r.a.createElement(I,{movie:e,itemClicked:this.rowClicked,key:e.id,active:this.state.selected===e.id}));return r.a.createElement(_.a,null,e)}}var D=L;class j extends r.a.Component{constructor(e){super(e),this.handleSelect=e=>{this.selectedMovieID=e,fetch("https://api.themoviedb.org/3/movie/"+e+"?api_key=3058e041b6c8b665ff6e7c489a63e9d8&language=en-US",{}).then(e=>{e.json().then(e=>{this.props.handleSelectMovie(e)})},e=>{console.log(e.message)})},this.handleNewSearch=e=>{this.props.handleNewSearch(e),this.setState({listLoading:!0}),fetch("https://api.themoviedb.org/3/search/movie?query="+e+"&api_key=3058e041b6c8b665ff6e7c489a63e9d8&language=en-US&page=1&include_adult=false",{}).then(e=>e.json().then(this.updateMovies))},this.updateMovies=e=>{console.log(e),"False"!==e.Response?(this.setState({noResults:!1,searchResults:e.results,listLoading:!1}),this.props.handleNewResults(e.results)):this.setState({noResults:!0,searchResults:[],listLoading:!1})},this.state={searchResults:e.initialResults,noResults:!1,listLoading:!1},this.selectedMovieID=null}render(){return r.a.createElement("div",null,r.a.createElement(N,{newSearch:this.handleNewSearch,searchTypeChanged:this.searchTypeChanged,searchType:this.state.searchType,searchHistory:this.props.searchHistory}),this.state.listLoading?r.a.createElement(p.a,{animated:!0,now:100}):r.a.createElement(D,{movies:this.state.searchResults,itemClicked:this.handleSelect,selectedMovieID:this.selectedMovieID}),this.state.noResults&&r.a.createElement("p",null,"No results"))}}var O=j,K=a(74),P=a(75);class V extends r.a.Component{constructor(...e){super(...e),this.handleToggleFav=()=>{this.props.toggleFavorite(this.props.movie)}}render(){if(this.props.loading)return r.a.createElement(p.a,{active:!0,now:100});let e=r.a.createElement(m.a,{onClick:this.handleToggleFav},"Add to Favorites");return this.props.isFave&&(e=r.a.createElement(m.a,{onClick:this.handleToggleFav},"Remove From Favorites")),r.a.createElement(C.a,{fluid:!0},r.a.createElement(v.a,null,r.a.createElement(u.a,{xs:4},null!==this.props.movie.poster_path&&r.a.createElement(g.a,{src:"https://image.tmdb.org/t/p/w500/"+this.props.movie.poster_path,alt:"Poster",fluid:!0})),r.a.createElement(u.a,null,e,r.a.createElement("h2",null," ",this.props.movie.title," "),r.a.createElement("h4",null," ",r.a.createElement(K.a,null,this.props.movie.vote_average)," ",this.props.movie.release_date," "),r.a.createElement("p",{className:"lead"},this.props.movie.overview))),r.a.createElement(P.a,{className:"mt-2"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Runtime"),r.a.createElement("td",null,this.props.movie.runtime)))))}}var B=V;class A extends r.a.Component{constructor(...e){super(...e),this.state={searchHistory:[],searchResults:[],detailMovie:null,detailLoading:!1},this.appendSearchHistory=e=>{const t=e.trim();-1===this.state.searchHistory.indexOf(t)&&t.length>0&&this.setState({searchHistory:[t].concat(this.state.searchHistory)})},this.handleNewResults=e=>{this.setState({searchResults:e})},this.handleNewDetailMovie=e=>{this.setState({detailMovie:e})}}render(){return this.props.visible?r.a.createElement(C.a,{fluid:!0},r.a.createElement(v.a,{className:"mt-4 mx-3"},r.a.createElement(u.a,{sm:3},r.a.createElement(O,{handleSelectMovie:this.handleNewDetailMovie,handleNewSearch:this.appendSearchHistory,handleNewResults:this.handleNewResults,initialResults:this.state.searchResults,searchHistory:this.state.searchHistory})),r.a.createElement(u.a,null,null!==this.state.detailMovie&&r.a.createElement(B,{movie:this.state.detailMovie,loading:this.state.detailLoading,isFave:this.props.faves.hasOwnProperty(this.state.detailMovie.id),toggleFavorite:this.props.toggleFavorite})))):null}}class J extends r.a.Component{constructor(e){super(e),this.toggleFavorite=e=>{if(this.state.faves.hasOwnProperty(e.id)){const t=Object.assign({},this.state.faves);delete t[e.id],this.setState({faves:t})}else{const t={};t[e.id]=e;const a=Object.assign(this.state.faves,t);this.setState({faves:a})}},this.handleChooseView=e=>{this.setState({view:e,detailMovie:null})},this.state={faves:{},searchHistory:[],view:"search",detailMovie:null,detailLoading:!1}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,{handleChooseView:this.handleChooseView,viewNow:this.state.view}),r.a.createElement(A,{visible:"search"===this.state.view,toggleFavorite:this.toggleFavorite,faves:this.state.faves}),r.a.createElement(F,{visible:"faves"===this.state.view,toggleFavorite:this.toggleFavorite,faves:this.state.faves}))}}var U=J;l.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.56dd3453.chunk.js.map