import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css'

import GridLayout from 'react-grid-layout';
import { Responsive, WidthProvider } from 'react-grid-layout';
// const ResponsiveGridLayout = WidthProvider(Responsive);
// const ResponsiveGridLayout = WidthProvider(GridLayout);


// class IssueTitle extends React.Component {
//     render() {
//         // layout is an array of objects, see the demo for more complete usage
//         var layout = [
//             { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
//             { i: 'b', x: 1, y: 0, w: 3, h: 2, static: true },
//             { i: 'c', x: 4, y: 0, w: 1, h: 2, static: true }
//         ];
//         return <ResponsiveGridLayout className="layout"
//             // layout={{lg: layout, md: layout, sm: layout, layout: layout, xxs: layout}}
//             layout={{ lg: layout }}
//             // layout={layout}
//             // cols={5}
//             cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
//             rowHeight={30}
//             // width={1800}
//             // height={1200}
//             breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
//         >
//             <div key="a"><div style={{ backgroundColor: "#aaaaaa" }}>a</div></div>
//             <div key="b"><div style={{ backgroundColor: "#aaaaaa" }}>b</div></div>
//             <div key="c"><div style={{ backgroundColor: "#aaaaaa" }}>c</div></div>
//         </ResponsiveGridLayout>
//     }
// }

import _ from "lodash";
const ResponsiveReactGridLayout = WidthProvider(Responsive);
class IssueTitle extends React.Component {
    static defaultProps = {
      className: "layout",
      rowHeight: 30,
      onLayoutChange: function() {},
      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      initialLayout: generateLayout()
    };
  
    state = {
      currentBreakpoint: "lg",
      compactType: "vertical",
      mounted: false,
      layouts: { lg: this.props.initialLayout }
    };
  
    componentDidMount() {
      this.setState({ mounted: true });
    }
  
    generateDOM() {
      return _.map(this.state.layouts.lg, function(l, i) {
        return (
          <div key={i} className={l.static ? "static" : ""}>
            {l.static ? (
              <span
                className="text"
                title="This item is static and cannot be removed or resized."
              >
                Static - {i}
              </span>
            ) : (
              <span className="text">{i}</span>
            )}
          </div>
        );
      });
    }
  
    onBreakpointChange = breakpoint => {
      this.setState({
        currentBreakpoint: breakpoint
      });
    };
      
    onLayoutChange = (layout, layouts) => {
      this.props.onLayoutChange(layout, layouts);
    };      
  
    render() {
      return (
        <div>          
          <ResponsiveReactGridLayout
            {...this.props}
            layouts={this.state.layouts}
            onBreakpointChange={this.onBreakpointChange}
            onLayoutChange={this.onLayoutChange}
            // WidthProvider option
            measureBeforeMount={false}
            // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
            // and set `measureBeforeMount={true}`.
            useCSSTransforms={this.state.mounted}
            compactType={this.state.compactType}
            preventCollision={!this.state.compactType}
          >
            {this.generateDOM()}
          </ResponsiveReactGridLayout>
        </div>
      );
    }
  }
    

  function generateLayout() {
    return _.map(_.range(0, 25), function(item, i) {
      var y = Math.ceil(Math.random() * 4) + 1;
      return {
        x: (_.random(0, 5) * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString(),
        static: Math.random() < 0.05
      };
    });
  }

  export default IssueTitle