// 사실상 깡통
import express from "express";
import cors from "cors";
import { createServer } from "http";
import { WebSocket } from "ws";

// redis로 멤버의 정보를 가져오던지 하자.
// 여기에서는 채팅과 서버 자신에게 필요한 데이터를 저장시키는 방향으로 가도록 하자.
// "실행은 도커로 한다. 관리가 편해지기 떄문!!!!!"
// Do : check about discord server. We need Kafka?  or redis or both?
// http 서버 넣어주자.
