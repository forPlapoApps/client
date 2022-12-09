import socket from 'lib/socket'

export const sendScore = (uid: string, name: string, value: number) => {
  const data: DataWithScore = { roomUid: uid, userName: name, value: value }
  socket.emit('sendScore', { data: data })
}
