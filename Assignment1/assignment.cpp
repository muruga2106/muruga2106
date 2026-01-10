#include<bits/stdc++.h>
using namespace std;

//defining the node structure
class Node {
public:
    int data;
    Node* next;

    Node(int data){
        this->data = data;
        this->next = nullptr;
    }
};

//Add element at front of the linked list
void AddElementFront(Node* &head, int data){
    Node* newNode = new Node(data);
    if(head != nullptr){
        newNode->next = head;
    }
    head = newNode;
    return;
}

//insert element at position
// 1 2 3 4 6 7
void AddElementAtPosition(Node* &head, int data, int pos){
    Node* newNode = new Node(data);
    pos--; //if need to be inserted a 5th pos.. should move head 4 steps; //1

    if(pos == 0 || head == nullptr){
        head = newNode;
        return;
    }
    Node* temp = head; //1

    while(temp->next != nullptr && --pos){ //0
        temp = temp->next;
    }
    newNode->next = temp->next;
    temp->next = newNode;
    return;

}

//Add element at last of the linked list
void AddElementLast(Node* &head, int data){
    if(head == nullptr){
        head = new Node(data);
        return;
    }
    Node* temp = head;
    while(temp->next != nullptr){
        temp = temp->next;
    }
    temp->next = new Node(data);
    return;
}

//delete element at front
void DeleteElementAtFront(Node* &head){
    if(head == nullptr) return;
    Node* temp = head;
    head = head->next;
    delete temp;
}

//delete an element at position
//1 2 3 4 5 6
void DeleteElementAtPosition(Node* &head, int pos){ //2
    
    if(head == nullptr) return;
    Node* temp = head;
    if(pos == 1){
        head = head->next;
        delete temp;
        return;
    }

    for(int i = 1 ; temp!=nullptr && i < pos-1 ; i++){
        temp = temp->next;
    }

    if(temp == nullptr || temp->next == nullptr) return;

    Node* nodeToDelete = temp->next;
    temp->next = temp->next->next;
    delete(nodeToDelete);
}

//delete at end;
void DeleteElementAtEnd(Node* &head){
    if(head == nullptr) return;
    if(head->next == nullptr){
        delete head;
        head = nullptr;
        return;
    }
    Node* temp = head;
    while(temp->next->next !=nullptr){
        temp = temp->next;
    }
    delete temp->next;
    temp->next = nullptr;
    return;
}

//display the data of linkedlist
void display(Node* head){
    if(head == nullptr){
        return;
    }
    cout << head->data <<endl;
    display(head->next);
}

//search element
//1 2 3 4 5
// int search(Node* head, int pos){
//     if(head == nullptr) return -1;
//     if(pos == 1) return head->data; //not found
//     return search(head->next, pos-1);
// }

int search(Node* head, int value, int pos = 1){
    if(head == nullptr) return -1;
    if(head->data == value) return pos;
    return search(head->next, value, ++pos);
}

int main()
{
    Node * head = nullptr;
    AddElementFront(head, 1);
    AddElementLast(head, 2);
    AddElementLast(head, 3);
    AddElementLast(head, 5);
    AddElementAtPosition(head, 4, 4);
    DeleteElementAtPosition(head, 4);
    display(head);
    int val = 10;
    int pos = search(head, val);
    if(pos == -1) cout <<"Value not found..!"<< endl;
    else cout <<"Value at position "<< pos << endl;
    return 0;
}
