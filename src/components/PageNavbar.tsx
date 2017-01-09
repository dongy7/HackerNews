import * as React from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import IconButton from 'material-ui/IconButton';

const PageNavbar = (props: {
  page: number, pageCount: number,
  onLeftClick: Function, onRightClick: Function,
  onPageChange: Function,
}) => {
  const leftDisabled = props.page === 1;
  const rightDisabled = props.page === props.pageCount;
  return (
    <div>
      <Toolbar>
        <ToolbarGroup firstChild>
          <IconButton
            disabled={leftDisabled}
            onClick={() => {
              props.onPageChange();
              props.onLeftClick();
            }}
          >
            <ChevronLeft />
          </IconButton>
        </ToolbarGroup>
        <ToolbarGroup>
          {<b>{props.page}/{props.pageCount}</b>}
        </ToolbarGroup>
        <ToolbarGroup lastChild>
          <IconButton
            disabled={rightDisabled}
            onClick={() => {
              props.onPageChange();
              props.onRightClick();
            }}
          >
            <ChevronRight/>
          </IconButton>
        </ToolbarGroup>
      </Toolbar>
    </div>
  );
};

export default PageNavbar;
