import Link from 'next/link';

const StoryList = ({ stories }) => (
    <div>
         {stories.map(story =>(
           <div key={story.id}>
              <h2>{story.title}</h2>
              <span>{story.points || 0} points</span>
              <Link href={`/story?id=${story.id}`}>
                <a>{story.comments_count || 0} comments</a>
              </Link>
            </div>
          ))}
    </div>
)

export default StoryList