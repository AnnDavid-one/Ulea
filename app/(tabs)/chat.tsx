import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';

type Message = {
  id: string;
  text: string;
  sender: 'me' | 'other';
  timestamp: Date;
};

type ChatScreenProps = {
  route?: {
    params?: {
      contactName?: string;
      contactAvatar?: string;
    };
  };
};

const ChatScreen: React.FC<ChatScreenProps> = ({ route }) => {
  const { COLORS } = useTheme();
  const styles = chatStyles();
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hey there! How are you doing?',
      sender: 'other',
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: '2',
      text: 'I am good, thanks for asking! How about you?',
      sender: 'me',
      timestamp: new Date(Date.now() - 1800000),
    },
    {
      id: '3',
      text: 'Pretty good. Just working on some new projects.',
      sender: 'other',
      timestamp: new Date(Date.now() - 600000),
    },
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const flatListRef = useRef<FlatList>(null);

  const contactName = route?.params?.contactName || 'John Doe';
  const contactAvatar = route?.params?.contactAvatar || 'https://randomuser.me/api/portraits/men/1.jpg';

  const handleSend = () => {
    if (newMessage.trim() === '') return;

    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'me',
      timestamp: new Date(),
    };

    setMessages([...messages, message]);
    setNewMessage('');

    if (Math.random() > 0.3) {
      const replyDelay = 1000 + Math.random() * 2000;
      setTimeout(() => {
        const reply: Message = {
          id: (Date.now() + 1).toString(),
          text: getRandomReply(),
          sender: 'other',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, reply]);
      }, replyDelay);
    }
  };

  const getRandomReply = () => {
    const replies = [
      'That sounds great!',
      'Interesting, tell me more.',
      'I see what you mean.',
      'Let me think about that.',
      'What time works for you?',
      'Thanks for letting me know!',
      'Cool! 😎',
      'I agree with you.',
      'Maybe we should discuss this later.',
      'I appreciate your message!',
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  useEffect(() => {
    if (messages.length > 0) {
      flatListRef.current?.scrollToEnd({ animated: true });
    }
  }, [messages]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={24} color="#007AFF" />
            </TouchableOpacity>
            <Image source={{ uri: contactAvatar }} style={styles.avatar} />
            <View style={styles.headerText}>
              <Text style={styles.contactName}>{contactName}</Text>
              <Text style={styles.status}>Online</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="call" size={24} color="#007AFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Messages */}
        <View style={styles.messagesContainer}>
          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.messageContainer,
                  item.sender === 'me'
                    ? styles.myMessageContainer
                    : styles.otherMessageContainer,
                ]}
              >
                <View
                  style={[
                    styles.messageBubble,
                    item.sender === 'me'
                      ? styles.myMessageBubble
                      : styles.otherMessageBubble,
                  ]}
                >
                  <Text
                    style={[
                      styles.messageText,
                      item.sender === 'me'
                        ? styles.myMessageText
                        : styles.otherMessageText,
                    ]}
                  >
                    {item.text}
                  </Text>
                  <Text
                    style={[
                      styles.timestamp,
                      item.sender === 'me'
                        ? styles.myTimestamp
                        : styles.otherTimestamp,
                    ]}
                  >
                    {formatTime(item.timestamp)}
                  </Text>
                </View>
              </View>
            )}
            contentContainerStyle={styles.messagesList}
          />
        </View>

        {/* Input */}
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.attachmentButton}>
            <Ionicons name="attach" size={24} color={COLORS.primary} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            value={newMessage}
            onChangeText={setNewMessage}
            placeholder="Type a message..."
            placeholderTextColor="#999"
            multiline
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSend}
            disabled={newMessage.trim() === ''}
          >
            <Ionicons
              name="send"
              size={24}
              color={newMessage.trim() === '' ? '#ccc' : COLORS.primary}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const chatStyles = () => {
  const { COLORS } = useTheme();

  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: COLORS.background2,
    },
    container: {
      flex: 1,
    },
    messagesContainer: {
      flex: 1,
    },
    header: {
      backgroundColor: COLORS.background2,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      padding: 10,
    },
    headerContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginHorizontal: 10,
    },
    headerText: {
      flex: 1,
    },
    contactName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: COLORS.oppositeColor,
    },
    status: {
      fontSize: 12,
      color: COLORS.oppositeColor,
    },
    messagesList: {
      padding: 10,
      paddingBottom: 80, // Extra space at bottom to account for input
    },
    messageContainer: {
      marginBottom: 10,
    },
    myMessageContainer: {
      alignItems: 'flex-end',
    },
    otherMessageContainer: {
      alignItems: 'flex-start',
    },
    messageBubble: {
      maxWidth: '80%',
      padding: 12,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    myMessageBubble: {
      backgroundColor: '#007AFF',
      borderBottomRightRadius: 2,
    },
    otherMessageBubble: {
      backgroundColor: '#fff',
      borderBottomLeftRadius: 2,
    },
    messageText: {
      fontSize: 16,
    },
    myMessageText: {
      color: '#fff',
    },
    otherMessageText: {
      color: '#333',
    },
    timestamp: {
      fontSize: 10,
      marginTop: 5,
      textAlign: 'right',
    },
    myTimestamp: {
      color: 'rgba(255, 255, 255, 0.7)',
    },
    otherTimestamp: {
      color: 'rgba(0, 0, 0, 0.4)',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: COLORS.background2,
      borderTopWidth: 1,
      borderTopColor: COLORS.surfaceLight,
    },
    input: {
      flex: 1,
      minHeight: 40,
      maxHeight: 100,
      paddingHorizontal: 15,
      paddingVertical: 8,
      backgroundColor: '#f5f5f5',
      borderRadius: 20,
      fontSize: 16,
      marginHorizontal: 10,
    },
    attachmentButton: {
      padding: 8,
    },
    sendButton: {
      padding: 8,
    },
  });
};

export default ChatScreen;