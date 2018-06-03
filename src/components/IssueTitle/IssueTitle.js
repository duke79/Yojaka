import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css'

import $ from 'jquery'

import GridLayout from 'react-grid-layout';
import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);


class IssueTitle extends React.Component {
    onLayoutChange(layout, layouts) {        
        if (layout[0].w === 0 && layout[0].h === 0) {
            $("#a")[0].style.visibility = "hidden"
        }
        else{
            $("#a")[0].style.visibility = "visible"
        }
    }
    render() {
        var layoutLG = [
            { i: 'a', x: 0, y: 0, w: 1, h: 1, static: true },
            { i: 'b', x: 1, y: 0, w: 1, h: 1, static: true },
            { i: 'c', x: 4, y: 0, w: 1, h: 1, static: true },
            { i: 'd', x: 6, y: 0, w: 1, h: 1, static: true },
            { i: 'e', x: 9, y: 0, w: 1, h: 1, static: true },
            { i: 'f', x: 10, y: 0, w: 1, h: 1, static: true }
        ];
        var layoutMD = [
            { i: 'a', x: 0, y: 0, w: 0, h: 0, static: true },
            { i: 'b', x: 0, y: 0, w: 1, h: 3, static: true },
            { i: 'c', x: 3, y: 0, w: 1, h: 1, static: true },
            { i: 'd', x: 4, y: 0, w: 1, h: 2, static: true },
            { i: 'e', x: 5, y: 0, w: 1, h: 4, static: true },
            { i: 'f', x: 6, y: 0, w: 1, h: 1, static: true }
        ];
        return <ResponsiveGridLayout className="layout"
            layouts={{ lg: layoutLG, md: layoutMD }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={60}
            onLayoutChange={this.onLayoutChange}
        >
            <div key="a" id="a"><div style={{ backgroundColor: "#aaaaaa", height: "100%" }}>a</div></div>
            <div key="b"><div style={{ backgroundColor: "#aaaaaa", height: "100%" }}>b</div></div>
            <div key="c"><div style={{ backgroundColor: "#aaaaaa", height: "100%" }}>c</div></div>
            <div key="d"><div style={{ backgroundColor: "#aaaaaa", height: "100%" }}>d</div></div>
            <div key="e"><div style={{ backgroundColor: "#aaaaaa", height: "100%" }}>e</div></div>
            <div key="f"><div style={{ backgroundColor: "#aaaaaa", height: "100%" }}>f</div></div>
        </ResponsiveGridLayout>
    }
}

// import _ from "lodash";
// const ResponsiveReactGridLayout = WidthProvider(Responsive);
// class IssueTitle extends React.Component {
//     static defaultProps = {
//       className: "layout",
//       rowHeight: 30,
//       onLayoutChange: function() {},
//       cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
//       initialLayout: generateLayout()
//     };

//     state = {
//       currentBreakpoint: "lg",
//       compactType: "vertical",
//       mounted: false,
//       layouts: { lg: this.props.initialLayout }
//     };

//     componentDidMount() {
//       this.setState({ mounted: true });
//     }

//     generateDOM() {
//       return _.map(this.state.layouts.lg, function(l, i) {
//         return (
//           <div key={i} className={l.static ? "static" : ""}>
//             {l.static ? (
//               <span
//                 className="text"
//                 title="This item is static and cannot be removed or resized."
//               >
//                 Static - {i}
//               </span>
//             ) : (
//               <span className="text">{i}</span>
//             )}
//           </div>
//         );
//       });
//     }

//     onBreakpointChange = breakpoint => {
//       this.setState({
//         currentBreakpoint: breakpoint
//       });
//     };

//     onLayoutChange = (layout, layouts) => {
//       this.props.onLayoutChange(layout, layouts);
//     };      

//     render() {
//       return (
//         <div>          
//           <ResponsiveReactGridLayout
//             {...this.props}
//             layouts={this.state.layouts}
//             onBreakpointChange={this.onBreakpointChange}
//             onLayoutChange={this.onLayoutChange}
//             // WidthProvider option
//             measureBeforeMount={false}
//             // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
//             // and set `measureBeforeMount={true}`.
//             useCSSTransforms={this.state.mounted}
//             compactType={this.state.compactType}
//             preventCollision={!this.state.compactType}
//           >
//             {this.generateDOM()}
//           </ResponsiveReactGridLayout>
//         </div>
//       );
//     }
//   }


//   function generateLayout() {
//     return _.map(_.range(0, 25), function(item, i) {
//       var y = Math.ceil(Math.random() * 4) + 1;
//       return {
//         x: (_.random(0, 5) * 2) % 12,
//         y: Math.floor(i / 6) * y,
//         w: 2,
//         h: y,
//         i: i.toString(),
//         static: Math.random() < 0.05
//       };
//     });
//   }

export default IssueTitle