import socket from 'lib/socket'

export const logout = (uid: string, name: string) => {
  const data = { roomUid: uid, userName: name }
  socket.emit('logOutRoom', { data: data })
}
