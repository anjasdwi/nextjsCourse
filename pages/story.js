import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Layout from '../components/Layout';
import CommentList from '../components/CommentList';

class Story extends React.Component {
    static async getInitialProps({ req, res, query }){
        let story;
    
        try {
          const storyId = query.id;
          const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`);
          story = await response.json();
        } catch (err) {
          console.log(err);
          story = [];
        }
        return {story}; 
    }

    render() {
        const { story } = this.props;

        if(!story) {
            return <Error statusCode={503} />
        }
        return <Layout title={story.title} backButton={true}>
            <main>
                <h2><a href={story.url}>{story.title}</a></h2>
                <div className="story-details">
                    <strong>{story.points} points </strong>
                    <strong>{story.comments_count} comments </strong>
                    <strong>{story.time_ago}</strong>
                </div>
                {story.comments.length > 0 ? (
                    <CommentList comments={story.comments} />
                ) : <div>No comments for this story</div>}
            </main>
        </Layout> 
    }
}

export default Story;