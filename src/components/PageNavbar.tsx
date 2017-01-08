import * as React from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const PageNavbar = (props: { page: number }) => {
  return (
    <div>
      <Toolbar>
        <ToolbarGroup firstChild>
          <ChevronLeft />
        </ToolbarGroup>
        <ToolbarGroup>
          {<b>{props.page}/50</b>}
        </ToolbarGroup>
        <ToolbarGroup lastChild>
          <ChevronRight />
        </ToolbarGroup>
      </Toolbar>
    </div>
  );
};

export default PageNavbar;
