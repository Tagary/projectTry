import React from 'react';
import { Accordion } from 'react-bootstrap';

function AboutMe() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Контактная информация</Accordion.Header>
        <Accordion.Body>ФИО: Ермолаев Иван Владимирович Телефон: +79537626422</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Обо Мне</Accordion.Header>
        <Accordion.Body>
          Меня зовут Иван Ермолаев. Мне 24 года. Мой дом находится в городе Новосибирск, в
          Заельцовском районе. Работаю в офисе компании UP.ru и домой возвращаюсь, самое позднее, в
          девять вечера. Не курю, выпиваю изредка. Ложусь спать в 01 ночи и убеждаюсь, что получаю
          ровно восемь часов сна, несмотря ни на что. Перед сном я пью стакан сока, а также минут
          десять уделяю разминке, поэтому до утра сплю без особых проблем. Утром я просыпаюсь, не
          чувствуя ни усталости, ни стресса, словно младенец. На медосмотре мне сказали, что никаких
          проблем нет. Я пытаюсь донести, что я обычный человек, который хочет жить спокойной
          жизнью. Я не забиваю себе голову проблемами вроде побед или поражений, и не обзавожусь
          врагами, из-за которых не мог бы уснуть. Я знаю наверняка: в таком способе взаимодействия
          с обществом и кроется счастье.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AboutMe;