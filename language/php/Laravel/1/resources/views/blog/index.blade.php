<x-layout.header />
<div style="display: flex; justify-content: center;">
    <div style="width: 70%;">
        @each('components.post.post', $posts, 'post')
    </div>
</div>
