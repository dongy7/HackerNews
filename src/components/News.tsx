import * as React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import {Story, Comment} from '../types';
import CommentList from './CommentList';

interface Props {
  story: Story;
};

const comments: Comment[] = [
  {
    "by" : "nickb",
    "id" : 8952,
    "kids" : [ 9153 ],
    "parent" : 8863,
    "text" : "The only problem is that you have to install something. See, it's not the same as USB drive. Most corporate laptops are locked and you can't install anything on them. That's gonna be the problem. Also, another point where your USB comparison fails is that USB works in places where you don't have internet access. <p>My suggestion is to drop the \"Throw away your USB drive\" tag line and use something else... it will just muddy your vision.<p>Kudos for launching it!!! Launching/shipping is extremely hard and you pulled it off! Super!",
    "time" : 1175727286,
    "type" : "comment"
  },
  {
    "by" : "BrandonM",
    "id" : 9224,
    "kids" : [ 9272 ],
    "parent" : 8863,
    "text" : "I have a few qualms with this app:<p>1. For a Linux user, you can already build such a system yourself quite trivially by getting an FTP account, mounting it locally with curlftpfs, and then using SVN or CVS on the mounted filesystem.  From Windows or Mac, this FTP account could be accessed through built-in software.<p>2. It doesn't actually replace a USB drive.  Most people I know e-mail files to themselves or host them somewhere online to be able to perform presentations, but they still carry a USB drive in case there are connectivity problems.  This does not solve the connectivity issue.<p>3. It does not seem very \"viral\" or income-generating.  I know this is premature at this point, but without charging users for the service, is it reasonable to expect to make money off of this?",
    "time" : 1175786214,
    "type" : "comment"
  },
];

class News extends React.Component<Props, null> {
  render() {
    return (
      <div>
        <Card>
          <CardTitle
            title={this.props.story.title}
            subtitle={`${ this.props.story.score } points by ${ this.props.story.by }`}
          />
        </Card>
        <Card>
          <CardTitle
            title="Comments"
          />
          <CardText>
            <CommentList
              comments={comments}
            />
          </CardText>
        </Card>
      </div>
    );
  }
};

export default News;
