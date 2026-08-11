import React, { useState, useEffect } from "react";
import "./Community.styles.scss";
import Header from "../../Components/Header/Header";

interface Comment {
  id: number;
  author: string;
  text: string;
}

interface Post {
  id: number;
  author: string;
  content: string;
  date: string;
  likes: number;
  comments: Comment[];
}

const INITIAL_POSTS: Post[] = [
  {
    id: 1,
    author: "Ana Silva",
    content: "Consegui juntar 5kg de tampinhas de garrafa PET nesta semana! Alguém sabe qual o ponto de coleta mais próximo da centro para entregar?",
    date: "11/08/2026",
    likes: 4,
    comments: [
      { id: 101, author: "Lucas Santos", text: "Parabéns, Ana! Tem o ponto no Ecoponto Central, veja na aba Rotas." }
    ]
  },
  {
    id: 2,
    author: "Carlos Eduardo",
    content: "Dica do dia: Lembrem-se de lavar as embalagens de leite antes de descartar para evitar mau cheiro e contaminação do lote!",
    date: "10/08/2026",
    likes: 8,
    comments: []
  }
];

export default function Community() {
  const [posts, setPosts] = useState<Post[]>(() => {
    const saved = localStorage.getItem("@ColetaMigos:posts");
    return saved ? JSON.parse(saved) : INITIAL_POSTS;
  });

  const [authorInput, setAuthorInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [commentAuthorInput, setCommentAuthorInput] = useState<{ [key: number]: string }>({});
  const [commentTextInput, setCommentTextInput] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    localStorage.setItem("@ColetaMigos:posts", JSON.stringify(posts));
  }, [posts]);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorInput.trim() || !contentInput.trim()) return;

    const newPost: Post = {
      id: Date.now(),
      author: authorInput,
      content: contentInput,
      date: new Date().toLocaleDateString("pt-BR"),
      likes: 0,
      comments: []
    };

    setPosts([newPost, ...posts]);
    setAuthorInput("");
    setContentInput("");
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    }));
  };

  const handleAddComment = (e: React.FormEvent, postId: number) => {
    e.preventDefault();
    const author = commentAuthorInput[postId] || "";
    const text = commentTextInput[postId] || "";

    if (!author.trim() || !text.trim()) return;

    setPosts(posts.map(post => {
      if (post.id === postId) {
        const newComment: Comment = {
          id: Date.now(),
          author,
          text
        };
        return { ...post, comments: [...post.comments, newComment] };
      }
      return post;
    }));

    setCommentAuthorInput({ ...commentAuthorInput, [postId]: "" });
    setCommentTextInput({ ...commentTextInput, [postId]: "" });
  };

  return (
    <div className="community-container">
      <Header />

      <main className="community-content">
        <div className="community-header">
          <span className="badge">Engajamento Ecológico</span>
          <h1>Comunidade ColetaMigos</h1>
          <p>Compartilhe suas conquistas sustentáveis, tire dúvidas e troque ideias sobre reciclagem.</p>
        </div>

        <div className="new-post-card">
          <h3>Criar uma nova publicação</h3>
          <form className="form-group" onSubmit={handleCreatePost}>
            <input
              type="text"
              placeholder="Seu nome"
              value={authorInput}
              onChange={(e) => setAuthorInput(e.target.value)}
            />
            <textarea
              placeholder="O que você reciclou ou aprendeu hoje?"
              value={contentInput}
              onChange={(e) => setContentInput(e.target.value)}
            />
            <button type="submit">Publicar</button>
          </form>
        </div>

        <div className="posts-list">
          {posts.map(post => (
            <div className="post-card" key={post.id}>
              <div className="post-header">
                <div className="author-info">
                  <div className="avatar">{post.author.charAt(0).toUpperCase()}</div>
                  <span className="author-name">{post.author}</span>
                </div>
                <span className="post-date">{post.date}</span>
              </div>

              <p className="post-content">{post.content}</p>

              <div className="post-actions">
                <button className="btn-like" onClick={() => handleLike(post.id)}>
                  💚 {post.likes} Curtidas
                </button>
              </div>

              <div className="comments-section">
                {post.comments.length > 0 && (
                  <div className="comments-list">
                    <span className="comments-title">Comentários:</span>
                    {post.comments.map(comment => (
                      <div className="comment-item" key={comment.id}>
                        <span className="comment-author">{comment.author}:</span>
                        <span className="comment-text">{comment.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                <form className="add-comment-form" onSubmit={(e) => handleAddComment(e, post.id)}>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    style={{ flex: "0.4" }}
                    value={commentAuthorInput[post.id] || ""}
                    onChange={(e) => setCommentAuthorInput({ ...commentAuthorInput, [post.id]: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Escreva um comentário..."
                    value={commentTextInput[post.id] || ""}
                    onChange={(e) => setCommentTextInput({ ...commentTextInput, [post.id]: e.target.value })}
                  />
                  <button type="submit">Comentar</button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
