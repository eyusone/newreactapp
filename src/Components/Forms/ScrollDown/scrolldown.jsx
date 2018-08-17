// ES6 Imports
import React, {Component} from 'react';
import 'bootswatch/dist/pulse/bootstrap.css';
import { Link, Element , Events, Button, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 
 
// Or Access Link,Element,etc as follows
/*let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;*/
 
class ScrollDown extends React.Component{
  componentDidMount() {
 
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
 
    scrollSpy.update();
 
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }

  scrollTo() {
    scroller.scrollTo('main', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
     // ContainerId: 
    })
  }

  scrollMore() {
    scroll.scrollMore(100);
  }
  handleSetActive (to) {
    console.log(to);
  }
  render() {
  	return (
      <div>

        <Link activeClass="active"  className="scroll btn btn-primary btn-lg text-white" to="navbar" 
        spy={true} smooth={true} duration={500} style = {{fontSize: '14px'}}>
        Open the app!</Link>

      </div>
    )
  }
}
 
export default ScrollDown;