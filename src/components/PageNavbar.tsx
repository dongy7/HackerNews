import * as React from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const PageNavbar = (props: { page: number }) => {
  const leftDisabled = props.page === 1;
  const rightDisabled = props.page === 50;
  return (
    <div>
      <Toolbar>
        <ToolbarGroup firstChild>
          <ChevronLeft disabled={leftDisabled}/>
        </ToolbarGroup>
        <ToolbarGroup>
          {<b>{props.page}/50</b>}
        </ToolbarGroup>
        <ToolbarGroup lastChild>
          <ChevronRight disabled={rightDisabled}/>
        </ToolbarGroup>
      </Toolbar>
    </div>
  );
};

export default PageNavbar;
