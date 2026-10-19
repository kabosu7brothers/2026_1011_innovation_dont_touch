const SUPABASE_URL = "https://dlmaujcsjgapzszwxwhf.supabase.co";//SupabaseのURL
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsbWF1amNzamdhcHpzend4d2hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIyOTY2NTYsImV4cCI6MjEwNzg3MjY1Nn0.tLqArXR0xAdUTDq4ErpUHmADXtJwcBwg5-RV4bo3R8A";
//APIキー
const supabaseClient = window.supabase.createClient(SUPABASE_URL, ANON_KEY);

//ユーザー登録
async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
//ユーザー登録エラー処理
  if (error) {
    console.error('登録エラー:', error.message)
  } else {
    console.log('登録成功:', data)
  }
}
//ユーザーログイン処理
async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
//ユーザーログインエラー処理
  if (error) {
    console.error('ログインエラー:', error.message)
  } else {
    console.log('ログイン成功:', data.user)
  }
}
//グーグルによる外部ログイン
async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  })
}
//ログアウト
async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) console.error('ログアウトエラー:', error.message)
}
